import axios from 'axios';

axios.interceptors.response.use(null , error=>{
    const expectedError = 
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if(!expectedError)
    {
        console.log("error code 500");
    }

    return Promise.reject(error);
});

const service = {
    post: axios.post,
    get: axios.get,
    put: axios.put,
    delete: axios.delete
};

export default service;