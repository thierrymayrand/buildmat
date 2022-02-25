import shoeImage from "./images/shoe.jpg";

function CartItem(props) {
    return (
        <div className="cart__item-container">
            <div className="cart__item-image-text">
                <img className="cart__item-image" src={shoeImage} />
                <div
                ><h4>{props.title}</h4>
                    <p>description text</p>
                </div>
            </div>

            <div>
                <p>${props.price}</p>
            </div>
        </div>
    )
}

export default CartItem;