import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:44398/api'
})