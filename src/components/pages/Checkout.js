import "./Checkout.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import cartContext from "../store/cart-context";
import { PaymentElement } from "@stripe/react-stripe-js"


function Checkout() {


    return (
        <form>
            <PaymentElement />
            <button>Submit</button>


        </form>

    )
}
export default Checkout;