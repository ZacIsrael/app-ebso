import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import "./Register.css";
import AuthService from "../services/auth.service";


const required = (value) => {
    if (!value) {
      return (
          <div className="alert alert-danger" role="alert">
            This field is required!
          </div>
      );
    }
  };

  const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
          <div className="alert alert-danger" role="alert">
           Enter your username
          </div>
      );
    }
  };

  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
          <div className="alert alert-danger" role="alert">
            Enter your password
          </div>
      );
    }
  };


  const ConfirmRegistration = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
      };

      const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };

      const onChangeVerificationCode = (e) => {
          const verificationCode = e.target.value;
          setVerificationCode(verificationCode);
      }

      const handleRegister = (e) => {
        e.preventDefault();
    
        setMessage("");
        setSuccessful(false);
    
        form.current.validateAll();
    
        if (checkBtn.current.context._errors.length === 0) {
          AuthService.confirmRegistration(username, password, verificationCode)
          .then(
              (response) => {
                console.log('response.data.header.messages', response.data.header.messages)
                setMessage(response.data.header.messages);
                setSuccessful(true);
              },
              (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data.header &&
                        error.response.data.header.message) ||
                    error.message ||
                    error.toString();
    
                setMessage(resMessage);
                setSuccessful(false);
              }
          );
        }
      };

      return (


        <div className="col-md-12">
          <div className="card card-container">
            <img
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
                className="profile-img-card"
            />
  
            <Form onSubmit={handleRegister} ref={form}>
              {!successful && (
  
                
                  <div>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <Input
                          type="text"
                          className="form-control"
                          name="username"
                          value={username}
                          onChange={onChangeUsername}
                          validations={[required, vusername]}
                      />
                    </div>
  
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Input
                          type="password"
                          className="form-control"
                          name="password"
                          value={password}
                          onChange={onChangePassword}
                          validations={[required, vpassword]}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="verificationCode">Verification Code</label>
                      <Input
                          type="text"
                          className="form-control"
                          name="verificationCode"
                          value={verificationCode}
                          onChange={onChangeVerificationCode}
                          validations={[required]}
                      />
                    </div>
  
             
  
                    <div className="form-group">
                      <button className="btn btn-primary btn-block">Confirm Registration</button>
                    </div>
                  </div>
              )}
  
              {message && (
                  <div className="form-group">
                    <div
                        className={
                          successful ? "alert alert-success" : "alert alert-danger"
                        }
                        role="alert"
                    >
                      {message}
                    </div>
                  </div>
              )}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
          </div>
        </div>
    );

  };

  export default ConfirmRegistration;