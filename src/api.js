import axios from 'axios';

const serverUrl = `${process.env.REACT_APP_SERVER_URL}`;

async function get(endpoint, params = '') {
  return axios.get(serverUrl + endpoint + '/' + params);
}

async function post(endpoint, data) {
  const bodyData = JSON.stringify(data);

  return axios.post(serverUrl + endpoint, bodyData, {
    'Content-Type': 'application/json',
  });
}

async function put(endpoint, data) {
  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
  // 예시: {name: "Kim"} => {"name": "Kim"}
  const bodyData = JSON.stringify(data);

  return axios.put(serverUrl + endpoint, bodyData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

async function del(endpoint, params = '') {
  return axios.delete(serverUrl + endpoint + '/' + params);
}

export { get, post, put, del as delete };
