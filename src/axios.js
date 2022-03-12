  
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gorest.co.in/public/v1',
  
  headers: {'Authorization': process.env.REACT_APP_API_CODE}
});

export default instance;