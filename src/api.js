import * as Api from "../../api";

const serverUrl = String(process.env.REACT_APP_SERVER_URL);

async function get(endpoint, params = "") {
  return Api.get(serverUrl + endpoint + "/" + params, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
}

async function post(endpoint, data) {
  const bodyData = JSON.stringify(data);
  console.log(serverUrl + endpoint);
  return Api.post(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
}

async function put(endpoint, data) {
  const bodyData = JSON.stringify(data);

  return Api.put(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
}

async function del(endpoint, params = "") {
  return Api.delete(serverUrl + endpoint + "/" + params);
}
export { get, post, put, del as delete };
