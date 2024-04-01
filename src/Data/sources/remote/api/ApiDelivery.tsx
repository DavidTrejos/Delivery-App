import axios from 'axios';

const ApiDelivery = axios.create ({
    baseURL:'http://192.168.1.74:9001/api',
    headers: {
        'Content-type': 'application/json'
    }
})

export {ApiDelivery}