import axios from 'axios';

const baseUrl = "https://localhost:44350/api";

const addNewUser = newUser => axios.post(`${baseUrl}/users`, newUser);
const getUserByEmail = email => axios.get(`${baseUrl}/users/email/${email}`).then(result => result.data);
const editNewUser = editUser => axios.put(`${baseUrl}/users/1`, editUser);
const editUserGet = editUserGet => axios.get(`${baseUrl}/users/1`, editUserGet);

export default { addNewUser, getUserByEmail, editNewUser, editUserGet };
