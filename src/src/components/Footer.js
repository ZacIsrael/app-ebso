import React from 'react';
import "./Footer.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Email from './Email';

function Footer() {
  return (
    <div className='footer-container'>
    
      
    <div className="footer=links">
      <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
          <img className = "header_logo"
                    src= "https://i.ibb.co/S6ZQLS3/EBSO.jpg"
                    alt= ""
            />
            

        </div>
        <div className='footer-link-items'>
          <h2>Categories</h2>
            <Link to='/Book'>Book</Link>
            <Link to='/Clothing'>Clothing</Link>
            <Link to='/Lifestyle'>Lifestyle</Link>
            <Link to='/Technology'>Technology</Link>
              {/* <div className="private">
              &copy;{new Date().getFullYear()} EBSO | All rights reserved |
               Terms Of Service | Privacy
            </div> */}
        </div>
   s
       
        <div className='footer-link-items'>
          <h2>Help</h2>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>My Account</Link>
            <Link to='/'>How it works</Link>
           

        </div>
        
       
        <div className="email">
        <div className='footer-link-items'>
          <h2>Email for Support</h2>
           
            <Email />
          
          
        </div>
      </div>
    </div>
    </div>
    
    </div>
  );
}

export default Footer;
