import axios from "axios";

const axiosBaseUrl= process.env.REACT_APP_AXIOS_BASE_URL;

axios.defaults.baseURL = axiosBaseUrl; 

export default axios;
