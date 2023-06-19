import axios from 'axios';

axios.defaults.baseURL = 'https://livraria-backend.vercel.app/';

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.defaults.timeout = 10000;

export default axios