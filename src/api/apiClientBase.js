import axios from 'axios';

const apiClient = axios.create({
	withCredentials: false,
});

export default apiClient;
