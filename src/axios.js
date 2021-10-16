  
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gorest.co.in/public/v1',
  
  headers: {'Authorization': 'Bearer 1c85a0a718a12c114f4ea88e552208e0769bacdff616d209a75e187b5eff5924'}
});

export default instance;