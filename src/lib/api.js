import axios from "axios";
import { session } from "../reducers/token-store";

const baseURL = `https://hospitalcenter-id.herokuapp.com`
// const baseURLLocal = `http://localhost:3001`

const api = axios.create({ baseURL: baseURL })
export default api;