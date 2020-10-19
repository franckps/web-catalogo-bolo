import axios from 'axios'
import { getToken } from './auth'

const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL? process.env.REACT_APP_SERVER_URL : 'http://127.0.0.1:3333',
    headers: {
        'Authorization': `${getToken()}` 
    }
});

export default api;