import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:3001/api/v1",
    // responseType: "json",
    // headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //     'Origin': 'http://localhost:3000'
    // }
})