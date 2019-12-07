import axios from 'axios';

const baseUrl = 'https://localhost:44350/api';

const getAllProducts = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/product`)
    .then((result) => resolve(result.data))
    .catch((err) => reject(err));
});

const deleteProd = (productId) => axios.delete(`${baseUrl}/product/${productId}`);

export default { getAllProducts, deleteProd };
