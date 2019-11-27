import axios from 'axios';

const baseUrl = "http://localhost:50090/api";

const addNewProduct = (newProd) => axios.post(`${baseUrl}/product`, newProd);

export default { addNewProduct };
