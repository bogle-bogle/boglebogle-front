import axios from "axios";

const serverUrl = String(process.env.REACT_APP_BACKPORT);

async function get(endpoint, params = "") {
  return axios.get(serverUrl + endpoint + "/" + params, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
}

async function post(endpoint, data) {
  const bodyData = JSON.stringify(data);

  return axios.post(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
}

async function put(endpoint, data) {
  const bodyData = JSON.stringify(data);

  return axios.put(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
}

async function del(endpoint, params = "") {
  return axios.delete(serverUrl + endpoint + "/" + params);
}

export { get, post, put, del as delete };
