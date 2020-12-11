import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import {Link, useHistory } from "react-router-dom";

import "./Register.css";
import AuthService from "../services/auth.service";


const required = (value) => {
  if (!value) {
    return (
        <div className="alert-danger" role="alert">
          This field is required!
        </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
        <div className="alert-danger" role="alert">
          This is not a valid email.
        </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
        <div className="alert-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
        <div className="alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
    );
  }
};

const vfirstName = (value) => {
  if (!value) {
    return (
        <div className="alert-danger" role="alert">
          Please enter your first name
        </div>
    );
  }
}
const vlastName = (value) => {
  if (!value) {
    return (
        <div className="alert-danger" role="alert">
          Please enter your last name
        </div>
    );
  }
}

const vaddressLine1 = (value) => {
  if (!value) {
    return (
        <div className="alert-danger" role="alert">
          Please enter your address
        </div>
    );
  }
}

const vcity = (value) => {
  if (!value) {
    return (
        <div className="alert-danger" role="alert">
          Please enter the city that you live in
        </div>
    );
  }
}

const vstate= (value) => {
  if (value.length !== 2) {
    return (
        <div className="alert-danger" role="alert">
          Please enter the state that you live in (2 letter abbreviation)
        </div>
    );
  }
}

const vzipCode = (value) => {
  if (!value) {
    return (
        <div className="alert-danger" role="alert">
          Please enter the zip code of the area in which you reside
        </div>
    );
  }
}

const vcountry = (value) => {
  if (!value) {
    return (
        <div className="alert-danger" role="alert">
          Please enter the country of which you reside
        </div>
    );
  }
}

const vphoneNumber = (value) => {
  if (!value) {
    return (
        <div className="alert-danger" role="alert">
          Please enter your phone number 
        </div>
    );
  }
}


const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeFirstName = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };

  const onChangeMiddleName = (e) => {
    const middleName = e.target.value;
    setMiddleName(middleName);
  };

  const onChangeLastName = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
  };

  const onChangeAddressLine1 = (e) => {
    const addressLine1 = e.target.value;
    setAddressLine1(addressLine1);
  };

  const onChangeAddressLine2 = (e) => {
    const addressLine2 = e.target.value;
    setAddressLine2(addressLine2);
  };

  const onChangeCity = (e) => {
    const city = e.target.value;
    setCity(city);
  };

  const onChangeState = (e) => {
    const state = e.target.value;
    setState(state);
  };

  const onChangeCountry = (e) => {
    const country = e.target.value;
    setCountry(country);
  };
  const onChangeZipCode = (e) => {
    const zipCode = e.target.value;
    setZipCode(zipCode);
  };
  const onChangePhoneNumber = (e) => {
    const phoneNumber = e.target.value;
    setPhoneNumber(phoneNumber);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, password, email, firstName, lastName, middleName,
        addressLine1, addressLine2, city, state, zipCode, country,
        phoneNumber).then(
          (response) => {
            console.log('response.data.header.messages', response.data.header.messages)
            setMessage(response.data.header.messages);
            setSuccessful(true);
          },
          (error) => {
            const resMessage =
                (error.response &&
                    error.response.data.header &&
                    error.response.data.header.errors[0].message) ||
                    error.response.data.header.errors[0].message ||
                error.toString();
                console.log('error.response.data.header.errors[0].message',error.response.data.header.errors[0].message )
            setMessage(resMessage);
            setSuccessful(false);
          }
      );
    }
  };

 
  
  return (


      <div className="whole">
        
        

          <Form onSubmit={handleRegister} ref={form}>
            {!successful && (

              
                 <div className="register_form">

                            <Link to="/">
                             <img 
                                className="login_logo"
                                src="https://i.ibb.co/Ld0g4D3/output-onlinepngtools.png"
                                alt=""
                             />
                            </Link>
                   <div className="Register-Container">
                     <h1>Register for New Account</h1>
                     <div className="form_1">


                     <div className="Register-Form"> 
                    <label htmlFor="username">Username</label>
                    <Input
                        type="text"
                        className="Register-Control"
                        name="username"
                        value={username}
                        onChange={onChangeUsername}
                        validations={[required, vusername]}
                    />
                  </div>
                  <div className="Register-Form">
                    <label htmlFor="firstName">First Name</label>
                    <Input
                        type="text"
                        className="Register-Control"
                        name="firstName"
                        value={firstName}
                        onChange={onChangeFirstName}
                        validations={[required, vfirstName]}
                    />
                  </div>

                  <div className="Register-Form">
                    <label htmlFor="middleName">Middle Name</label>
                    <Input
                        type="text"
                        className="Register-Control"
                        name="middleName"
                        value={middleName}
                        onChange={onChangeMiddleName}
                       // validations={[required, vfirstName]}
                    />
                  </div>

                  <div className="Register-Form">
                    <label htmlFor="lastName">Last Name</label>
                    <Input
                        type="text"
                        className="Register-Control"
                        name="firstName"
                        value={lastName}
                        onChange={onChangeLastName}
                        validations={[required, vlastName]}
                    />
                  </div>

                  <div className="Register-Form">
                    <label htmlFor="email">Email</label>
                    <Input
                        type="text"
                        className="Register-Control"
                        name="email"
                        value={email}
                        onChange={onChangeEmail}
                        validations={[required, validEmail]}
                    />
                  </div>

                  <div className="Register-Form">
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        className="Register-Control"
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                        validations={[required, vpassword]}
                    />
                  </div>
                  </div>
                  <div className="form_2">
                  <div className="Register-Form">
                    <label htmlFor="addressLine1">Address Line 1</label>
                    <Input
                        type="text"
                        className="Register-Control"
                        name="addressLine1"
                        value={addressLine1}
                        onChange={onChangeAddressLine1}
                        validations={[required, vaddressLine1]}
                    />
                  </div>

                  <div className="Register-Form">
                    <label htmlFor="addressLine2">Address Line 2</label>
                    <Input
                        type="text"
                        className="Register-Control"
                        name="addressLine2"
                        value={addressLine2}
                        onChange={onChangeAddressLine2}
                        //validations={[required, vfirstName]}
                    />
                  </div>

                  <div className="Register-Form">
                    <label htmlFor="city">City</label>
                    <Input
                        type="text"
                        className="Register-Control"
                        name="city"
                        value={city}
                        onChange={onChangeCity}
                        validations={[required, vcity]}
                    />
                  </div>

                  <div className="Register-Form">
                    <label htmlFor="state">State</label>
                    <Input
                        type="text"
                        className="Register-Control"
                        name="state"
                        value={state}
                        onChange={onChangeState}
                        validations={[required, vstate]}
                    />
                  </div>

                  <div className="Register-Form">
                    <label htmlFor="zipCode">Zip Code</label>
                    <Input
                        type="text"
                        className="Register-Control"
                        name="zipCode"
                        value={zipCode}
                        onChange={onChangeZipCode}
                        validations={[required, vzipCode]}
                    />
                  </div>

                  <div className="Register-Form">
                    <label htmlFor="country">Country</label>
                    <Input
                        type="text"
                        className="Register-Control"
                        name="country"
                        value={country}
                        onChange={onChangeCountry}
                        validations={[required, vcountry]}
                    />
                  </div>

                  <div className="Register-Form">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <Input
                        type="text"
                        className="Register-Control"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={onChangePhoneNumber}
                        validations={[required, vphoneNumber]}
                    />
                  </div>
                  
                  </div>
                  <div className="Register-Form">
                    <button className="btn btn-primary btn-block">Sign Up</button>
                  </div>
                </div>
                </div>
            )}

            {message && (
                <div className="Register-Form">
                  <div
                      className={
                        successful ? "alert alert-success" : "alert-danger"
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
      
  );
};

export default Register;


