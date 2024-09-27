import axios from "axios";
import { BASE_URL } from "constants/queryKey";

const customAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default customAxios;
