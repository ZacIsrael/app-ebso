import React from 'react'
import './Header.css';
import "./Featured.js";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
    return  (
    
    <nav className="header">
            
       {/*logo on the left->img */}
       <Link to="/">
       <img className = "header_logo" 
       src="/images/EBSO.png"
       alt=""
       />
       </Link>

       {/* Search box */}
       <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon" />
       </div>
      
       
       {/* 3 links */}

        <div className="header_nav">
            {/* first link */}
            <Link to="/login"  className="header_link">
                <div className="header_option">
                    <span className="header_optName">Login</span>
                </div>
            </Link>

             {/* first link */}
             <Link to="/"  className="header_link">
                <div className="header_option">
                    <span className="header_optName">My Orders</span>
                </div>
            </Link>

            <Link to="/"  className="header_link">
                <div className="header_option">
                    <span className="header_optName">Shopping Cart</span>
                </div>
            </Link>

        </div>

       {/* Basket icon with number */}
     </nav>
    );
    
}

export default Header
