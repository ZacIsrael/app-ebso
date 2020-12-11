import React, { useState, useEffect } from 'react'
import './Header.css';
import "./Featured.js";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ListAltIcon from '@material-ui/icons/ListAlt';
import {useStateValue} from "./StateProvider";
import AuthService from "../services/auth.service";

function Header() {
    const [{ basket }] = useStateValue();
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      console.log('user.body', user.body)
      setShowModeratorBoard(user.body.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.body.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

    return(
    <nav className="header">
            
       {/*logo on the left->img */}
       <Link to="/">
       <img className = "header_logo" 
       src="/images/EBSO.png"
       alt=""
       />
       </Link>

    
      
       
       {/* 3 links */}

       <div className="header_nav">
            {/* first link */}
            
            <Link to={"/categories"} className="nav-link">
              Categories
            </Link>
            <Link to={"/products"} onClick={(e) => localStorage.removeItem("category")} className="nav-link">
              Products
            </Link>

            {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/users"} className="nav-link">
               
              </Link>
            </li>
          )}
             {/* first link */}
          
            {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                Profile: {currentUser.body.username}
              </Link>
            </li>
           
              <a href="/login" className="nav-link" onClick={logOut}>
                Logout
              </a>
      
          </div>
        ) : ( 
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>

            </li>
          </div>
        )}

            <Link to="/checkout"  className="header_link">
                <div className="header_option">
                    <span className="header_optName">Shopping Cart</span>
                        <div className="header_cartlogo">
                            <ShoppingCartIcon />
                        
                        <span className="header_optionLineTwo header_basketCount">
                            {basket?.length}
                        </span>
                        </div>
                </div>
            </Link>

        </div>

       {/* Basket icon with number */}
     </nav>
    );
    
}

export default Header
