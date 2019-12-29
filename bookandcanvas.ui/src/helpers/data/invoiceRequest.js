import axios from 'axios';

const baseUrl = 'https://localhost:44350/api/invoice';

const getuserInvoices = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/user/1`)
    .then((Response) => {
      resolve(Response.data);
    })
    .catch((error) => reject(error));
});

export default { getuserInvoices };
