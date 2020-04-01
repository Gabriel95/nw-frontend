import axios from 'axios';

const axiosinstace = axios.create({
  baseURL: 'http://localhost:44346/api'
});

export default axiosinstace;
