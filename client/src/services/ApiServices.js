import axios from 'axios'
import JwtService from "./TokenServices";

const Apiservices = axios.create({ baseURL: process.env.REACT_APP_BASE_URL, withCredentials: true })

Apiservices.interceptors.request.use(
  config => {
  
    config.headers['Authorization'] = `Bearer ${JwtService.getToken()}`
    return Promise.resolve(config)
  },
  error => {
    return Promise.reject(error)
  }
)
// instance.interceptors.response.use(
//   (response) => {},
//   (error) => {}
// );

export default Apiservices





