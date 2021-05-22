import axios from "axios";

export function request(props) {
  const response = axios(props).then((response) => {
    return response;
  });
  return response;
}
