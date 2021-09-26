import axios from "axios";
/**
 * Create  request and make an Api Call
 * @param url {string} HTTP url for making request
 * @param method {string} HTTP request type GET | POST | PUT | DELETE
 * @param data {Object} body param object for POST request
 */
const makeRequest = async (url, method, data) => {
	const params = await createParams(url, method, data);

	return makeAxiosCall(params)
		.then(res => {
			return res;
		})
		.catch(err => {
			return {
				error: true,
				response: {
					Message: err
				}
			};
		});
};

/**
 * Create header params
 * @param method {string} HTTP request type GET | POST | PUT | DELETE
 * @param data {Object} body param object for POST request
 */
const createParams = async (url, method, data) => {
	let params = {
		method: method,
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*"
		},
		crossDomain: true,
		url: url,
		data: ""
	};
	//Stringify data only if data present -> eg. POST request
	if (data) params.data = JSON.stringify(data);
	else delete params.data;
	return params;
};

/**
 * Make call using Fetch API
 * @param url {string} HTTP url for making request
 * @param config Config object
 */
const makeAxiosCall = async params => {
	let obj = {
		error: false,
		response: Object
	};
	try {
		const { data: axiosResponse, status } = await axios(params);
		if (typeof axiosResponse !== "undefined" && status === 200) {
			obj.response = axiosResponse.data || axiosResponse;
		} else {
			obj.error = true;
			obj.response = {};
		}
	} catch (err) {
		obj.error = true;
		obj.response = err;
	}
	return obj;
};

const requestController = {
	makeRequest,
	createParams,
	makeAxiosCall
};

export default requestController;
