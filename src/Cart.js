import React from "react";

function Cart({ cartCount }) {
    return (
        <>
            <div className="cart-button">
                🛒 Cart ({cartCount})
            </div>
        </>
    )
}

export default Cart;