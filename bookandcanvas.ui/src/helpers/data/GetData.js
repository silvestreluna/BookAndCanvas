import axios from 'axios';

const baseUrl = "http://localhost:50090/api";

const getServicesType = () => new Promise((resolve,reject) => {
  axios.get(`${baseUrl}/service`)
    .then((resp) => resolve(resp.data))
    .catch(err => reject(err));
});

export default { getServicesType };