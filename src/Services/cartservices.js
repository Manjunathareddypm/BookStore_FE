import axios from "axios";

const url = "http://localhost:8000/api/v1/";

const headerConfig = {
  headers: {
    authorization:`${localStorage.getItem('token')}`
  },
};

export const addedToCart = (id) => {
  return axios.post(url + `cart/addBook/${id}`, headerConfig);
};

export const removeFromCart = (id) => {
  return axios.post(url + `cart/removeBook/${id}`, headerConfig);
};