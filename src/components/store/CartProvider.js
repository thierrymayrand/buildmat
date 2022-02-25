import { useContext, useReducer } from "react";
import CartContext from "./cart-context";
import { projectFirestore } from "./firebase"

const defaultState = {
    items: [],
    totalAmount: 0
}

const reducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = parseInt(state.totalAmount) + parseInt(action.item.price);
        const updatedState = { items: updatedItems, totalAmount: updatedTotalAmount }
        return updatedState;
    }
    return defaultState;
}


function CartProvider(props) {

    const [cartState, dispatch] = useReducer(reducer, defaultState);

    const addItemHandler = (item) => {
        dispatch({ type: "ADD", item: item })
    }
    const removeItemHandler = (id) => {
        console.log("removing item");
    }

    const payHandler = (items, totalAmount) => {
        const doc = { items, totalAmount }
        projectFirestore.collection("user").doc('1').collection("orders").add(doc)
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        pay: payHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;