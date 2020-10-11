import React from 'react';
import "./Featured.css";

function Featured({title, image, price}) {
    return (
        <div className="featProduct">
            <p className="product_title">
                {title}
            </p>
            <p className= "product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
           
    
        <img src={image} alt="" />
        <button className="button"> Add to cart</button>

        </div>

    );
}

export default Featured;