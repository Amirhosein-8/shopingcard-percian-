import axios from 'axios';

const api = axios.create({
	baseURL: '/MainData/Products.json',
});

api.interceptors.response.use(res=>res.data)

export default api;
