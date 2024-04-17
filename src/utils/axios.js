import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://netflix-clone-server-7l76.onrender.com/api",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default axiosInstance;
