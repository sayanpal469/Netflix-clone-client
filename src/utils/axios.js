import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://netflix-server-3q04.onrender.com/api",
  // baseURL: "http://localhost:8000/api",
});

export default axiosInstance;
