const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
const BEARER_JWT_TOKEN = import.meta.env.VITE_BEARER_JWT_TOKEN;

export function GET_TRANSACTIONS() {
  	return {
    	url: `${API_ENDPOINT}/transaction/all`,
    	options: {
      		method: 'GET',
      		cache: 'no-store',
	  		headers: {
				"Content-type": "application/json;charset=UTF-8",
				"Accept": "application/json",
				"Authorization": `Bearer ${BEARER_JWT_TOKEN}`
			}
    	},
  	};
}

export function GET_DASHBOARD_DATA(){
	return {
		url: `${API_ENDPOINT}/account/dashboard`,
		options: {
			method: 'GET',
			cache: 'no-store',
			headers: {
				"Content-type": "application/json;charset=UTF-8",
			"Accept": "application/json",
			"Authorization": `Bearer ${BEARER_JWT_TOKEN}`
			}
		},
	};

}
