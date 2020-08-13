import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.sendsay.ru',
    // headers: {
    //     'content-type': 'application/json',
    // }
});