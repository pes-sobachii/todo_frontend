import axios from 'axios'

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
})

instance.interceptors.request.use((config) => {
	const token = window.localStorage.getItem('token')
	config.headers.Authorization = token
	return config
})

export default instance
