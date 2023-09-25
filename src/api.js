import { toast } from "react-toastify";
import { memberAction } from "./feature/member/member";
import axios from "axios";

const serverUrl = String(process.env.REACT_APP_SERVER_URL);

function getAuthHeaders() {
  const userToken = localStorage.getItem("userToken");
  return userToken ? { Authorization: `Bearer ${userToken}` } : {};
}

async function get(endpoint, params = "") {
  const requestURL =
    params === "" ? serverUrl + endpoint : serverUrl + endpoint + "/" + params;
  return axios
    .get(requestURL, { headers: getAuthHeaders() })
    .catch(handleJwtError);
}

async function post(endpoint, data) {
  return axios
    .post(serverUrl + endpoint, data, { headers: getAuthHeaders() })
    .catch(handleJwtError);
}

async function put(endpoint, data) {
  return axios
    .put(serverUrl + endpoint, data, { headers: getAuthHeaders() })
    .catch(handleJwtError);
}

async function del(endpoint, params = "") {
  return axios
    .delete(serverUrl + endpoint + "/" + params, { headers: getAuthHeaders() })
    .catch(handleJwtError);
}

function handleJwtError(error) {
  if (error.response?.data?.code === "EXPIRED_TOKEN") {
    localStorage.removeItem("userToken");
    localStorage.dispatch(memberAction.clearMember());
  } else if (error.response?.data?.code === "LOGIN_REQUIRED") {
    toast.error("로그인이 필요합니다.");
  } else {
    throw error;
  }
}
export { get, post, put, del as delete };
