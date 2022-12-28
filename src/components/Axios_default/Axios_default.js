import axios from 'axios';

const credentials = localStorage.getItem('credentials');

const common_axios = axios.create({
	baseURL: 'http://localhost:8080/api',
	timeout: 8000,
	headers: {
		Authorization: localStorage.getItem('credentials'),'Content-Type': 'application/json;charset=UTF-8',
		'Access-Control-Allow-Origin': 'http://localhost:3000'
	}
});


export default common_axios