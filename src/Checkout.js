import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue(); 

  return (
    <div className="checkout">
        <div className="checkout__left">
            <img
                className="checkout__ad"
                src="https://img.freepik.com/free-vector/parcel-packaging-isometric-set_1284-17925.jpg?t=st=1650773883~exp=1650774483~hmac=6eea2ea8f6f32cec894212dab0bf5fb769c1c9a0cd25c9655e2f9967e9f4d375&w=1380"
				alt="gift-card-ad"
            />

            <div>
                <h3>Hello, {user ? user?.email.split("@")[0] : "Guest"}</h3>
                <h3 className="checkout__title">Your Cart</h3>

						{basket.length === 0 && (
							<div className="checkout__main">
								<img
									className="checkout__image"
									src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
								/>
								
							</div>
						)}

                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
        </div>

        <div className="checkout__right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout