import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.3.193:8000",
});

export default instance;
