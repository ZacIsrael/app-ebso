import React from 'react'
import { useStateValue } from '../components/StateProvider';
import Header from "../components/Header";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from 'react-currency-format';
import Subtotal from './Subtotal';
import { Link } from "react-router-dom";


function Checkout() {

    const [{basket}] = useStateValue();

    return (
        <div className="checkout_all">
            <Header />
            <div className='checkout_left'>


                <div className="checkout">

                    {basket?.length === 0 ? (

                        <div className="cart_image">
                            <img
                                src="https://i.ibb.co/wJLfQX5/Your-Cart-is-Empty-3.png"
                                alt=""
                            />

                            <Link to="/AllProduct"  className="page_link">
                                <div className="page_option">
                                    <span className="page_optName">Continue browsing here</span>
                                </div>

                            </Link>

                        </div>



                    ) : (

                        <div>

                            <h2 className="checkout_title">MY CART</h2>
                            <div className="item_container">
                                <h4 className="title">PRODUCTS</h4>
                            </div>

                            {basket.map(item => (
                                <CheckoutProduct

                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}

                                />

                            ))}
                        </div>
                    )}

                </div>

                {basket.length > 0 && (
                    <div className="checkout_right">
                        <div className="item_container2">
                            <h4 className="title2">ORDER SUMMARY</h4>
                        </div>
                        <div className="total">
                            <Subtotal />
                        </div>
                    </div>

                )}
            </div>
        </div>
    );
}

export default Checkout;
