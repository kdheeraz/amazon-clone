import React from 'react'
import './Checkout.css'
import Subtotle from "./Subtotal"
import { useStateValue } from './StateProvider'

import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">

                <img alt="" className="checkout__ad" src="https://connect-assets.prosple.com/cdn/ff/3UVJ1GrRQln_OqzTdYq_8JbYmNY-pDZDNO4lW5M62Kg/1578558221/public/styles/scale_and_crop_center_890x320/public/2020-01/Banner-Amazon-893x321-2020.jpg?itok=Wn-QOqJ4">
                </img>

                <div className="checkout__title">

                    <h2>Your Shopping Basket</h2>

                </div>

                <div className="checkout__basket">
                    {basket.map((item => 
                    (<CheckoutProduct image={item.image} rating={item.rating} price={item.price} title={item.title} id={item.id}></CheckoutProduct>)
                    ))}
                </div>

            </div>



            <div className="checkout__right">

                <Subtotle />
            </div>

        </div>
    )
}

export default Checkout
