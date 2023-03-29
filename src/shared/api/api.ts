import axios from "axios";
import { LOCAL_STORAGE_USER_KEY } from "shared/const/localStorage";

export const $api = axios.create({
  baseURL: __API__,
  withCredentials: true,
  headers: {
    ["Access-Control-Allow-Origin"]: "*",
    ["Access-Control-Allow-Methods"]: "GET",
    ["Accept-Encoding"]: "gzip, deflate, br",
    ["Accept"]: "*/*",
    ["Connection"]: "keep-alive",
  },
});
