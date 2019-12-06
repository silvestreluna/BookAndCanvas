import axios from 'axios';
import apiKeys from '../apiKeys.json';

const url = `https://api.imgbb.com/1/upload?key=${apiKeys.keys.imgbbKey}`;

const addImgToImgBB = (img) => axios.post(`${url}`, img);

export default { addImgToImgBB };
