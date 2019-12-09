import axios from 'axios';

const baseUrl = "https://localhost:44350/api";

const addNewUser = newUser => axios.post(`${baseUrl}/users`, newUser);
const getUserByEmail = email => axios.get(`${baseUrl}/users/email/${email}`).then(result => result.data);

export default {addNewUser, getUserByEmail };
