import axios from "axios";

const SERVER_URL = "http://100.25.151.247:8080/api_airbnb";

const instance = axios.create({
    baseURL: SERVER_URL,
    timeout: 3000
});

export default instance;
