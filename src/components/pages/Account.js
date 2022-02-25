import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projectFirestore } from "../store/firebase"
import userContext from "../store/user-context";
import "./Account.css"


function Account() {
    const click = () => {
        console.log(items)
    }
    const [items, setItems] = useState([]);
    const userCtx = useContext(userContext)
    useEffect(() => {
        let results = []
        projectFirestore.collection("user").doc(userCtx.user.uid).collection("orders").get().then((snapshot) => {
            snapshot.forEach((doc) => {
                results.push({ id: doc.id, ...doc.data() })

            })
            console.log(results)
            setItems(results)

        })
    }, [])

    return (
        <div className="account__container">
            <div>

                <h3>Mes achats</h3>
                {items.map((item) => {
                    return (
                        <Link to={`product/${item.id}`} className="account__item-container">
                            <h3>{item.product.enteredTitle}</h3>
                            <p>{item.product.enteredDescription}</p>

                        </Link>

                    )

                })}
            </div>
        </div>
    )
}

export default Account;