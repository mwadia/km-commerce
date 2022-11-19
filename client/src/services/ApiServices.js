import axios from "axios";
import JwtService from "./TokenServices";
const Apiservices=axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `${JwtService.getToken()}`,
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
console.log(process.env.REACT_APP_BASE_URL);
export default Apiservices