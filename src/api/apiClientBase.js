import axios from 'axios';

const apiClient = axios.create({
	baseURL: 'https://rickandmortyapi.com/api/',
	withCredentials: false,
	timeout: 10000, // 10 seconds
});

export default apiClient;
