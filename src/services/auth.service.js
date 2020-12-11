import axios from "axios";

// const API_URL = "http://localhost:8080/api/v1/auth/";
const API_URL = "http://ebso-env-1.eba-skn6z3ga.us-east-2.elasticbeanstalk.com/api/v1/auth/";

const register = (username, password, email, firstName, lastName, middleName,
                  addressLine1, addressLine2, city, state, zipCode, country,
                  phoneNumber) => {
  return axios.post(API_URL + "signup", {
    username,
    password,
    email,
    name:{
      firstName,
      lastName,
      middleName,
    },
    address:{
      addressLine1,
      addressLine2,
      city,
      state,
      zipCode,
      country,
    },
    phoneNumber,
    "status": "PENDING",
    "lastLoginTimeStamp": null,
    "roles": [
      {
        "name": "ROLE_USER"
      }
    ]
  });
};

const confirmRegistration = (username, password, verificationCode) => {
  return axios.post(API_URL + "confirmregistration", {
    verificationCode,
    username,
    password
  });
};

const login = (username, password) => {
  return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.header) {
          console.log('ebsoResponse is not null!!!!!!!!!!!')
          localStorage.setItem("ebsoResponse", JSON.stringify(response.data));
        }
        return response.data;
      });
};

const logout = () => {
  console.log('Logging out');
  localStorage.removeItem("ebsoResponse");
};

const getCurrentUser = () => {
  console.log('localStorage.getItem("ebsoResponse"):',  localStorage.getItem("ebsoResponse"));
  return JSON.parse(localStorage.getItem("ebsoResponse"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
  confirmRegistration
};
