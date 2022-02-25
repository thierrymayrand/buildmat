import { Link } from "react-router-dom";

function CartSummary(props) {
    return (
        <div className="cart__summary-container">
            <h2>
                Summary
            </h2>

            <div className="cart__summary-details">

                <div className="cart__summary-subtotal">
                    <p>Subtotal</p>
                    <p>${props.totalAmount}</p>
                </div>
                <div className="cart__summary-taxes">
                    <p>Taxes</p>
                </div>
                <div className="cart__summary-total">
                    <p>Total</p>
                    <p>${props.totalAmount}</p>
                </div>
            </div>

            <Link to="/checkout" ><button className="cart__summary-checkout-btn">Checkout</button></Link>
        </div>
    )
}

export default CartSummary;