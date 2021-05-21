import axios from "axios";

export function request(url) {
  const response = axios(url).then((response) => {
    return response;
  });
  return response;
}
