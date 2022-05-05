import axios from "axios";
import { BASE_URL } from "../configURL";

const request = axios.create({
  baseURL: BASE_URL,
});

export default request;
