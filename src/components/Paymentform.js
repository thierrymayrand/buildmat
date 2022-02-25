import { CardElement, CardElements, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { projectFirestore } from "./store/firebase";
import userContext from "./store/user-context"

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}


function PaymentForm() {

    const userCtx = useContext(userContext)

    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const { productId } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        projectFirestore.collection("ebook").doc(productId).get().then((doc) => {
            if (doc.exists) {
                setProduct(doc.data())
                console.log(product.enteredPrice)
            } else {
                console.log("no item")
            }

        })
    }, [productId])
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),

        })


        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("http://localhost:8282/payment", {
                    amount: parseInt(product.enteredPrice) * 100,
                    id
                })

                if (response.data.success) {
                    console.log("Successful payment", response.data)
                    setSuccess(true)
                    try {
                        projectFirestore.collection('user').doc(userCtx.user.uid).collection('orders').add({ product })
                    } catch (error) {
                        console.log("Error", error)
                    }


                }
            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>

            {!success ?
                <form onSubmit={handleSubmit}>
                    <fieldset className="FormGroup">
                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    <button>Pay</button>
                </form>
                :
                <div>
                    <h2>You just bought a sweet</h2>
                </div>
            }
        </>
    )
}

export default PaymentForm;