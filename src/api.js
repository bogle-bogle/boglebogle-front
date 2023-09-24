import axios from "axios";
import { toast } from "react-toastify";
import { EventEmitter } from "events";
import { memberAction } from "./feature/member/member";

const serverUrl = String(process.env.REACT_APP_SERVER_URL);
export const apiEventEmitter = new EventEmitter();

function getAuthHeaders() {
  const userToken = localStorage.getItem("userToken");
  return userToken
    ? { Authorization: `Bearer ${userToken}` }
    : { Authorization: null };
}

async function get(endpoint, params = "") {
  let requestURL =
    params === "" ? serverUrl + endpoint : serverUrl + endpoint + "/" + params;

  return axios
    .get(requestURL, {
      headers: getAuthHeaders(),
    })
    .catch(handleJwtError);
}

async function post(endpoint, data) {
  return axios
    .post(serverUrl + endpoint, data, {
      headers: getAuthHeaders(),
    })
    .catch(handleJwtError);
}

async function put(endpoint, data) {
  return axios
    .put(serverUrl + endpoint, data, {
      headers: getAuthHeaders(),
    })
    .catch(handleJwtError);
}

async function del(endpoint, params = "") {
  return axios
    .delete(serverUrl + endpoint + "/" + params, {
      headers: getAuthHeaders(),
    })
    .catch(handleJwtError);
}

function handleJwtError(error) {
  if (error.response?.data?.code === "EXPIRED_TOKEN") {
    toast.error("로그인이 만료되었습니다. 재로그인해주세요.");
    memberAction.clearMember();
    localStorage.removeItem("userToken");
    // window.location.href = "https://thepet.thehyundai.site";
  } else if (error.response?.data?.code === "LOGIN_REQUIRED") {
    toast.error("로그인이 필요합니다.");
    // window.location.href = "https://thepet.thehyundai.site";
  } else {
    throw error;
  }
}

export { get, post, put, del as delete };
