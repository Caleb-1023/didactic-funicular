import axios from 'axios';

export default axios.create({
    baseURL: 'https://fidelis.serveo.net/api/v1/'
});