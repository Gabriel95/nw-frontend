import axios from 'axios';

const axiosinstance = axios.create({
  baseURL: 'https://localhost:44346/api'
});

export default axiosinstance;
