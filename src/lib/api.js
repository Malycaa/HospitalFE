import axios from "axios";
import { session } from "../reducers/token-store";

const baseURL = `https://hospitalcenter-id.herokuapp.com`
// const baseURLLocal = `http://localhost:3001`

const api = axios.create({ baseURL: baseURL })

api.interceptors.request.use(request => {
    try {
        const auth = session();
        if (auth.token) {
            request.headers['Authorization'] = 'Bearer ' + auth.token;
        }
        request.headers['Content-Type'] = 'application/json';

    } catch (error) {
        console.log(error.message);
    }
    return request
})

export default api;