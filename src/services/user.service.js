import axios from "axios";
import authHeader from "./auth-header";

// const API_URL = "http://localhost:8080/api/v1/test/";
const API_URL = "http://ebso-env-1.eba-skn6z3ga.us-east-2.elasticbeanstalk.com/api/v1/test/";
const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL, { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};
