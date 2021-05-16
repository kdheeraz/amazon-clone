import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product(props) {

    const [{basket},dispatch]=useStateValue();


    const addToBasket=()=>{

        //dispatch some item in data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:props.id,
               inbasket:true,
                image:props.img,
                price:props.price,
                rating:props.rating,
                title:props.title
            }
        })

console.log("this is basket",basket)
    }
    return (
        <div
            className="product"
        >

            <div className="product__info">

    <p>{props.title}</p>
                <p className="product__price"></p>
                <small>$</small>
    <strong>{props.price}</strong>

                <div className="product__rating">

                    {Array(props.rating).fill().map((_, i) => {

                        return (<p>
                            ⭐
                        </p>)

                    }

                    )}


                </div>

            </div>
    <img src={props.img} alt=""></img>
           <button onClick={addToBasket}>Add To Basket </button>

        </div>
    )
}

export default Product
