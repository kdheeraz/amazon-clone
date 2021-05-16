import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    let rating = [1, 2, 3, 4, 5]
    let title="It's pretty awsom product, believe it or not we will get it buying a mobile never hurts almost It's pretty awsom product, believe it or not we will get it buying a mobile never hurts almost"
    return (
        <div>
            <div className="home">

                <div className="home__container">
                    <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_NP._CB660400564_.jpg" alt="" />

                </div>

                <div className="home__row">

                    <Product img="https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg?downsize=*:180&output-quality=80&output-format=webp" rating={rating} price={1000} title={title} id={111} ></Product>
                    <Product img="https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg?downsize=*:180&output-quality=80&output-format=webp" rating={3} price={1000} title={title} id={111}></Product>
                    <Product img="https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg?downsize=*:180&output-quality=80&output-format=webp"  rating={2} price={1000} title={title} id={111}></Product>
                    <Product img="https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg?downsize=*:180&output-quality=80&output-format=webp"  rating={1} price={1000} title={title} id={111}></Product>


                    {/*product2*/}


                </div>

                <div className="home__row">
                    <Product img="https://images-na.ssl-images-amazon.com/images/I/71E5zB1qbIL._AC_SX522_.jpg" rating={4} price={1000} title={title} id={222}></Product>




                </div>

                <div className="home__row">
                    <Product img="https://images-na.ssl-images-amazon.com/images/I/71E5zB1qbIL._AC_SX522_.jpg" rating={rating} price={1000} title={title} id={333}></Product>
                    <Product img="https://images-na.ssl-images-amazon.com/images/I/71E5zB1qbIL._AC_SX522_.jpg" rating={5} price={1000} title={title} id={333}></Product>




                </div>



            </div>

        </div>

    )
}

export default Home
