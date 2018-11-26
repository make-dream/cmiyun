import axios from 'axios'

var request = axios.create({
  baseURL: process.env.AXIOS_BASE_URL
});

export default request
