import { useContext } from "react";
import cartContext from "../store/cart-context";
import { Link } from "react-router-dom";
import image from "../images/singlearticle.png"
import "./EbookItem.css"

function EbookItem(props) {
    const cartCtx = useContext(cartContext);
    const addCartHandler = () => {
        cartCtx.addItem({ title: props.title, price: props.price, id: props.id });
    }



    return (

        <Link to={`/ebook/${props.id}`} className="ebook__item-container">
            <img src={props.image} className="ebook__item-image" />
            <h2>{props.title}</h2>
            <div className="ebook__add-to-cart-container">

                <p>{props.price} $</p>


            </div>
        </Link>

    )
}

export default EbookItem;