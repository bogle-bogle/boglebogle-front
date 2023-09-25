// import axios from "axios";
// import { toast } from "react-toastify";

// const serverUrl = String(process.env.REACT_APP_SERVER_URL);

// async function get(endpoint, params = "") {
//   let requestURL = "";
//   console.log(serverUrl);
//   if (params === "") {
//     requestURL = serverUrl + endpoint;
//   } else {
//     requestURL = serverUrl + endpoint + "/" + params;
//   }

//   return axios
//     .get(requestURL, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("userToken")}`,
//       },
//     })
//     .catch((error) => {
//       if (error.response?.data?.code == "EXPIRED_TOKEN") {
//         toast.error("로그인이 만료되었습니다. 재로그인해주세요.");
//         console.error(error.response);
//       }
//     });
// }

// async function post(endpoint, data) {
//   console.log(serverUrl);

//   return axios
//     .post(serverUrl + endpoint, data, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("userToken")}`,
//       },
//     })
//     .catch((error) => {
//       if (error.response?.data?.code == "EXPIRED_TOKEN") {
//         toast.error("로그인이 만료되었습니다. 재로그인해주세요.");
//         console.error(error.response);
//       }
//       toast.error(error.response.data.message);
//     });
// }

// async function put(endpoint, data) {
//   return axios
//     .put(serverUrl + endpoint, data, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("userToken")}`,
//       },
//     })
//     .catch((error) => {
//       if (error.response?.data?.code == "EXPIRED_TOKEN") {
//         toast.error("로그인이 만료되었습니다. 재로그인해주세요.");
//         console.error(error.response);
//       }
//     });
// }

// async function del(endpoint, params = "") {
//   return axios
//     .delete(serverUrl + endpoint + "/" + params, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("userToken")}`,
//       },
//     })
//     .catch((error) => {
//       if (error.response?.data?.code == "EXPIRED_TOKEN") {
//         toast.error("로그인이 만료되었습니다. 재로그인해주세요.");
//         console.error(error.response);
//       }
//     });
// }

// export { get, post, put, del as delete };

import axios from "axios";

const serverUrl = String(process.env.REACT_APP_SERVER_URL);

async function get(endpoint, params = "") {
  let requestURL = "";

  if (params === "") {
    requestURL = serverUrl + endpoint;
  } else {
    requestURL = serverUrl + endpoint + "/" + params;
  }

  return axios.get(requestURL, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
}

async function post(endpoint, data) {
  console.log(serverUrl);

  return axios.post(serverUrl + endpoint, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
}

async function put(endpoint, data) {
  return axios.put(serverUrl + endpoint, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
}

async function del(endpoint, params = "") {
  return axios.delete(serverUrl + endpoint + "/" + params);
}
export { get, post, put, del as delete };
