import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const ApiClient = {
    getData: () => {
        return axios.get(API_BASE_URL +'/v1/api', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },

    postData: (formData) => {
        return axios.post(API_BASE_URL +'/v1/api', null, {
            params: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    },

    updateData: (formData) => {
        return axios.put(API_BASE_URL +'/v1/api', null, {
            params: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    },

    deleteData: (formData) => {
        return axios.delete(API_BASE_URL +'/v1/api', {
            params: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }
};

export default ApiClient;