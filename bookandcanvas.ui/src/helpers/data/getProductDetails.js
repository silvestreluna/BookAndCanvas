import axios from 'axios';

const baseUrl = 'https://localhost:44350/api';

const getDetails = (id) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/product/${id}`)
    .then((resp) => resolve(resp.data))
    .catch((err) => reject(err));
});

export default { getDetails };
