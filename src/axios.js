  
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gorest.co.in/public-api',
  
  headers: {'Authorization': 'Bearer 2187e976d776b0eb6dcef6a043c4a3a96c4f1c92ff88c0dcff435d17d3845728'}
});

export default instance;