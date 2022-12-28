import axios from 'axios';

const credentials = localStorage.getItem('credentials');

const common_axios = axios.create({
	baseURL: 'https://backend-container-service.81dth4io9qo96.us-east-1.cs.amazonlightsail.com/api',
	timeout: 8000,
	headers: {
		Authorization: localStorage.getItem('credentials'),'Content-Type': 'application/json;charset=UTF-8',
		'Access-Control-Allow-Origin': 'https://frontend-container-service.81dth4io9qo96.us-east-1.cs.amazonlightsail.com'
	}
});


export default common_axios