import axios from 'axios'

const headerConfig = {
    headers:{
        // Authorization: "Bearer" + " "+ localStorage.getItem('token')
        authorization:`${localStorage.getItem('token')}`
    }
}
console.log(headerConfig);

export const getBooks = async () => {
    const result = await axios.get("http://localhost:8000/api/v1/books", headerConfig)
    return result
}

export const getById = (id) => {
    return axios.get(`http://localhost:8000/api/v1/books/${id}`, headerConfig);
  };