import axios from 'axios';

const baseUrl = "https://localhost:44350/api";

const addNewUser = (newUser) => axios.post(`${baseUrl}/users`, newUser);

export default { addNewUser };
