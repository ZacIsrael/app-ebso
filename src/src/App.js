import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import AuthService from "./services/auth.service";


import Login from "./components/Login";
import Register from "./components/Register";
import ConfirmRegistration from "./components/ConfirmRegistration";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Header from "./components/Header"
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";


const App = () => {
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

  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/confirmregistration" component={ConfirmRegistration} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/users" component={BoardUser} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
          <Route path="/products" component={Products} />
          <Route path="/categories" component={Categories} />
          <Route path="/checkout">
              <Checkout />
            </Route>
        </Switch>

        <Footer/>
      </div>
  );
};

export default App;
