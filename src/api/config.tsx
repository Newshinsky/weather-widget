import axios from "axios";


export let Token = "87edcad25f71addaf1e8c4f4002006f1"


const config = {
    baseURL: `https://api.openweathermap.org/`,
}
const api = axios.create(config);

export default api;