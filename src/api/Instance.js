import axios from "axios";
 const axiosInstance = axios.create({
    baseURL: process.env.React_App_BaseUrl ,
    params:{api_key: process.env.React_App_ApiKey}
 })
 export default axiosInstance