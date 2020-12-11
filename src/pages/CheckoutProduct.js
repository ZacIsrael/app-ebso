import React from 'react';

import "./CheckoutProduct.css";
import {useStateValue} from "../components/StateProvider";

function CheckoutProduct({id, title, image, price, rate}) {
    const [{basket} , dispatch] = useStateValue();
    const removeBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt=""/>
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    {title}
                </p>

                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                
                
               
                 
            
         
            <button onClick={removeBasket}>Remove item</button>
            <div className="other_line">
             <hr/>
            </div>
            </div>
           
            </div>
           
    );
}

export default CheckoutProduct;
