import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { projectFirestore } from "../store/firebase"
import userContext from "../store/user-context"

function MyProduct() {

    const userCtx = useContext(userContext)
    const { productId } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        projectFirestore.collection('user').doc(userCtx.user.uid).collection('orders').doc(productId).get().then((snapshot) => {
            if (snapshot.exists) {
                console.log(snapshot.data().product)
                setProduct(snapshot.data().product)

            } else {
                console.log("No doc")
            }
        })


    }, [productId])

    return (
        <div>
            <h2>{product.enteredTitle}</h2>
            <p>{product.enteredDescription}</p>
        </div>
    )
}

export default MyProduct;