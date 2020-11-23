import React, { useState, useEffect } from "react";
import "./Home.css";
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
          
            <h2>Featured Products</h2>
            <div className="row_first">
                <div className="home_product">
                    
                </div>
            </div>

       
            

            <div className="row_second">
                <h2>Popular Textbooks</h2>
                <div className="home_product">
                   
                </div>
            </div>


            <div className="row_third">
                <h2>Products from Highly Rated Sellers</h2>
                <div className="home_product">
                 

                </div>
            </div>
            
            <div className="row_third2">
                <div className="home_product">
\

            </div>
        </div>
        
    </div>
  );
};

export default Home;
