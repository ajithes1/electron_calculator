import axios from "axios";
import { API_URL } from "./config";

const axiosService = axios.create({
  baseURL: API_URL,
});

export function fetcher(url, params) {
  return axiosService
    .get(
      `${url}${params}&function=TIME_SERIES_DAILY&outputsize=compact&apikey=M0YZW8OZ86RGNLTF`
    )
    .then((res) => res.data);
}

export default axiosService;
