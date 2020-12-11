import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import { withRouter } from 'react-router'
import {Link, useHistory } from "react-router-dom";
import Lock from '@material-ui/icons/LockOpen';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      
      AuthService.login(username, password).then(
        () => {
          console.log('props', props)
          props.history.push("/home");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <Link to="/">
                  <img 
                   className="login_logo"
                   src="https://i.ibb.co/Ld0g4D3/output-onlinepngtools.png"
                   alt=""
                  />
      </Link>

      <div className="login_container">
        <h1>LOGIN</h1>

        <Form onSubmit={handleLogin} ref={form}>
          
          <div className="Login-Form">
          
            <MailOutlineIcon />
            <label htmlFor="username">Username</label>
          
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="Login-Form">
            
            <Lock />
            
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />

          </div>

          <div className="login_button">

            <button className="btn btn-primary btn-block">
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="Login-Form">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>

        <p>
                    By signing in, you agree to EBSO's Conditions and Agreements. 
                    Please see our Privacy Notice for information. 
                </p>
            <div className="acc_link">
                <Link to="/register"  className="page_link">
                <div className="page_option">
                    <span className="page_optName">Don't have an account? Sign up now</span>
                </div>
                
                 </Link>
      </div>
    </div>
    </div>
  );
};

export default withRouter(Login);