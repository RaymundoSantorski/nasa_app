import axios from 'axios';

const instance = axios.create({
    url: 'https://api.nasa.gov',
    params: {
        api_key: process.env.REACT_APP_API_KEY
    }
});

export default instance;