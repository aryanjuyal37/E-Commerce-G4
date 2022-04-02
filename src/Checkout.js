import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img
                className="checkout__ad"
                src="https://images.unsplash.com/photo-1578174756708-b11252ec6e01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
                alt=""
            />

            <div>
                <h2 className="checkout__title">
                    Your Cart
                </h2>
            </div>
        </div>

        <div className="checkout__right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout