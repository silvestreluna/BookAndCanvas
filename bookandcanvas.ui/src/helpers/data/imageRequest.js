import axios from 'axios';

const baseUrl = 'https://localhost:44350/api';

const postImgToDb = (imgObj) => axios.post(`${baseUrl}/image`, imgObj);

export default { postImgToDb };
