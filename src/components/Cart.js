import "./Cart.css";

import { useContext } from "react";
import cartContext from "./store/cart-context";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

function Cart() {
    const cartctx = useContext(cartContext);
    return (
        <div className="cart__container">
            <div className="cart__bag-container">
                <h2>Bag</h2>
                {cartctx.items.map((item) => {
                    return (
                        <CartItem title={item.title} price={item.price} />
                    )
                })}

            </div>
            <CartSummary totalAmount={cartctx.totalAmount} />
        </div>
    )
}

export default Cart;