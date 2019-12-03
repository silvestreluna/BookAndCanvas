import axios from 'axios';

const baseUrl = "http://localhost:44350/api";

const addNewProduct = (newProd) => axios.post(`${baseUrl}/product`, newProd);

export default { addNewProduct };
