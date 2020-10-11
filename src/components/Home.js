import React, { useState, useEffect } from "react";
import "./Home.css";
import Featured from "./Featured.js";
import { Link } from "react-router-dom";

import UserService from "../services/user.service";

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
       
        <Link to="/Shopping"  className="home_link">
            <img className = "home_pic" 
             src="/images/Banner.png"
             alt=""
            />
        </Link>
        
        {/* Product title, rating, image, price */}
            <h2>Featured Products</h2>
            <div className="row_first">
                <div className="home_product">
                    <Featured 
                    title="The Power of Habit"
                    image = "https://images-na.ssl-images-amazon.com/images/I/819ZixpQzUL.jpg"
                    price={2.50}
                    />

                 <Featured
                  title="Apple iPad Pro (12.9 -inch, Wi-Fi, 256 GB"
                  image = "https://images-na.ssl-images-amazon.com/images/I/61%2BWrV0wJsL._AC_SY445_.jpg"
                  price = {800.48}
                  />
                </div>
            </div>

       
            

            <div className="row_second">
                <h2>Popular Textbooks</h2>
                <div className="home_product">
                    <Featured 
                    title="Learn CS Concepts with Snap"
                    image = "https://images-na.ssl-images-amazon.com/images/I/514EtQiSwkL._SX404_BO1,204,203,200_.jpg"
                    price={15.55}
                    />

                    <Featured
                    title="Flow"
                    image = "https://images-na.ssl-images-amazon.com/images/I/61xW3njVmQL.jpg"
                    price = {9.48}
                    />

                    <Featured
                    title="Fundamentals of Discrete Math for Computer Science"
                    image = "https://images-na.ssl-images-amazon.com/images/I/41wxbFsK0WL._SX331_BO1,204,203,200_.jpg"
                    price = {19.28}
                    />

                    <Featured 
                    title="Computer Science Principles"
                    image = "https://images-na.ssl-images-amazon.com/images/I/41t0MdyBySL._SX331_BO1,204,203,200_.jpg"
                    price={12.32}
                    />

                    <Featured
                    title="Exploring Theatre"
                    image = "https://www.mheducation.com/cover-images/Jpeg_400-high/0078807786.jpeg"
                    price = {10.58}
                    />

                    <Featured
                    title="Theatre Brief"
                    image = "https://www.mheducation.com/cover-images/Jpeg_400-high/1260057380.jpeg"
                    price = {30.21}
                    />
                </div>
            </div>


            <div className="row_third">
                <h2>Products from Highly Rated Sellers</h2>
                <div className="home_product">
                    <Featured 
                    title="18 Piece Cookware Set"
                    image = "https://m.media-amazon.com/images/I/81axQJCys6L._AC_SS350_.jpg"
                    price={30.51}
                    />

                    <Featured
                    title="Single-Speed Cruiser"
                    image = "https://images-na.ssl-images-amazon.com/images/I/917GJKDg0lL._AC_SX425_.jpg"
                    price = {19.48}
                    />
                    <Featured
                    title="Bird Electric Scooter"
                    image = "https://images-na.ssl-images-amazon.com/images/I/41txUoEl38L._AC_SX425_.jpg"
                    price = {9.48}
                    />

                </div>
            </div>
            
            <div className="row_third2">
                <div className="home_product">

                    <Featured
                    title="Bluetooth Headphones"
                    image = "https://m.media-amazon.com/images/I/41srzfxYpXL._AC_SS350_.jpg"
                    price = {12.99}
                    />

                    <Featured 
                    title="Female Emory Shirt Medium"
                    image = "https://images-na.ssl-images-amazon.com/images/I/61wYjy3sZzL._AC_UL1100_.jpg"
                    price={1.99}
                    />

                    <Featured
                    title="Dooley"
                    image = "https://garyhaukcom.files.wordpress.com/2015/11/dooley-statue-e1446674673384.jpg?w=177"
                    price = {129.48}
                    />


            </div>
        </div>
        
    </div>

    // <div className="container">
    //   <header className="jumbotron">
    //     <h3>{content}</h3>
    //   </header>
    // </div>
  );
};

export default Home;
