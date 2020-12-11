import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import UserService from "../services/user.service";
import Featured from "../components/Featured";
import Carousel from 'react-elastic-carousel';
import Card from './Card.js';
import Sidebar from './Sidebar';
import Header from "./Header";


const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="home">
    <div className="Top">
       
        <Sidebar/>
        <div className='carousel'>
            <Carousel>
                <Card image= "https://i.ibb.co/SBpGwCG/shop-the-latest-trends-3.png"/>
                <Card image = "https://i.ibb.co/gdHyQpc/shop-the-latest-trends-4.png"/>
            </Carousel>
            
        </div>
    </div>
    {/* Product title, rating, image, price */}
       
   
        

        <div className="row_second">
            <h2>Popular Textbooks</h2>
            <h4>Choose the most popular books students are currently reading!</h4>
            <div className="home_product">
                <Featured 
                title="Learn CS Concepts with Snap"
                image = "https://images-na.ssl-images-amazon.com/images/I/514EtQiSwkL._SX404_BO1,204,203,200_.jpg"
                price={15.55}
                rate={3.5}
                />

                <Featured
                title="Flow"
                image = "https://images-na.ssl-images-amazon.com/images/I/61xW3njVmQL.jpg"
                price = {9.48}
                rate={3}
                />

                <Featured
                title="Fundamentals of Discrete Math for Computer Science"
                image = "https://images-na.ssl-images-amazon.com/images/I/41wxbFsK0WL._SX331_BO1,204,203,200_.jpg"
                price = {19.28}
                rate={4.5}
                />

                <Featured 
                title="Computer Science Principles"
                image = "https://images-na.ssl-images-amazon.com/images/I/41t0MdyBySL._SX331_BO1,204,203,200_.jpg"
                price={12.32}
                rate={5}
                />

                <Featured
                title="Exploring Theatre"
                image = "https://www.mheducation.com/cover-images/Jpeg_400-high/0078807786.jpeg"
                price = {10.58}
                rate={1}
                />

                <Featured
                title="Theatre Brief"
                image = "https://www.mheducation.com/cover-images/Jpeg_400-high/1260057380.jpeg"
                price = {30.21}
                rate={2.5}
                />
            </div>
        </div>


        <div className="row_third">
            <h2>Products from Highly Rated Sellers</h2>
            <h4>Choose the most popular books students are currently reading!</h4>
            <div className="home_product">
                <Featured 
                title="18 Piece Cookware Set"
                image = "https://m.media-amazon.com/images/I/81axQJCys6L._AC_SS350_.jpg"
                price={30.51}
                rate={3.0}
                />

                <Featured
                title="Single-Speed Cruiser"
                image = "https://images-na.ssl-images-amazon.com/images/I/917GJKDg0lL._AC_SX425_.jpg"
                price = {19.48}
                rate={2.5}
                />
                <Featured
                title="Bird Electric Scooter"
                image = "https://images-na.ssl-images-amazon.com/images/I/41txUoEl38L._AC_SX425_.jpg"
                price = {9.48}
                rate={1.5}
                />

            </div>
        </div>
        
        <div className="row_third2">
            <div className="home_product">

                <Featured
                title="Bluetooth Headphones"
                image = "https://m.media-amazon.com/images/I/41srzfxYpXL._AC_SS350_.jpg"
                price = {12.99}
                rate={4.5}
                />

                <Featured 
                title="Female Emory Shirt Medium"
                image = "https://images-na.ssl-images-amazon.com/images/I/61wYjy3sZzL._AC_UL1100_.jpg"
                price={1.99}
                rate={2.5}
                />

                <Featured
                title="Dooley"
                image = "https://garyhaukcom.files.wordpress.com/2015/11/dooley-statue-e1446674673384.jpg?w=177"
                price = {129.48}
                rate={1.5}
                />


        </div>
    </div>
    
</div>
    

);
}

export default Home
