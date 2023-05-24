import axios from "axios";

const BASE_URL = "http://192.168.29.178:2500/membership";
// const BASE_URL = "http://localhost:2500/membership";

const defaultHeaders = {
  isAuth: true,
  AdditionalParams: {},
  isJsonRequest: true,
  api_key: true,
};
export const ApiPostNoAuth = (type, userData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + type, userData)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error &&
          error.hasOwnProperty("response") &&
          error.response &&
          error.response.hasOwnProperty("data") &&
          error.response.data &&
          error.response.data.hasOwnProperty("error") &&
          error.response.data.error
        ) {
          reject(error.response.data);
        } else {
          reject(error.response.data);
        }
      });
  });
};

export const ApiGet = (type) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BASE_URL + type, getHttpOptions())
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error &&
          error.hasOwnProperty("response") &&
          error.response &&
          error.response.hasOwnProperty("data") &&
          error.response.data &&
          error.response.data.hasOwnProperty("error") &&
          error.response.data.errorer
        ) {
          reject(error?.response?.data);
        } else {
          reject(error?.response?.data);
        }
      });
  });
};

export const ApiUpload = (type, userData, AdditionalHeader) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + type, userData, {
        ...getHttpOptionsForUpload(),
        ...AdditionalHeader,
      })
      .then((responseJson) => {
        // resolve(responseJson);

        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error &&
          error.hasOwnProperty("response") &&
          error.response &&
          error.response.hasOwnProperty("data") &&
          error.response.data &&
          error.response.data.hasOwnProperty("error") &&
          error.response.data.error
        ) {
          reject(error?.response?.data);
        } else {
          reject(error?.response?.data);
        }
      });
  });
};

export const ApiDelete = (type) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(BASE_URL + type, getHttpOptions())
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error &&
          error.hasOwnProperty("response") &&
          error.response &&
          error.response.hasOwnProperty("data") &&
          error.response.data &&
          error.response.data.hasOwnProperty("error") &&
          error.response.data.error
        ) {
          reject(error?.response?.data);
        } else {
          reject(error?.response?.data);
        }
      });
  });
};

export const ApiPost = (type, userData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + type, userData, getHttpOptions())
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error &&
          error.hasOwnProperty("response") &&
          error.response &&
          error.response.hasOwnProperty("data") &&
          error.response.data &&
          error.response.data.hasOwnProperty("error") &&
          error.response.data.error
        ) {
          reject(error?.response?.data);
        } else {
          reject(error?.response?.data);
        }
      });
  });
};

export const getHttpOptions = (options = defaultHeaders) => {
  let headers = {};
  let token = localStorage.getItem("persist:adminAuth_SCCI");
  console.log("token", JSON.parse(token).token);

  token = JSON.parse(JSON.parse(token).token);
  if (options.hasOwnProperty("isAuth") && options.isAuth) {
    headers["Authorization"] = token;
    headers["Cache-Control"] = "no-cache";
  }

  if (options.hasOwnProperty("isJsonRequest") && options.isJsonRequest) {
    headers["Content-Type"] = "application/json";
  }

  if (options.hasOwnProperty("AdditionalParams") && options.AdditionalParams) {
    headers = { ...headers, ...options.AdditionalParams };
  }

  return { headers };
};
export const getHttpOptionsForUpload = (options = defaultHeaders) => {
  let headers = {};
  let token = localStorage.getItem("persist:adminAuth_SCCI");
  token = JSON.parse(JSON.parse(token).token);

  // let token = localStorage.getItem("persist:adminAuth");
  // // console.log("token", JSON.parse(token).token);
  // token = JSON.parse(JSON.parse(token).token);

  if (options.hasOwnProperty("isAuth") && options.isAuth) {
    headers["Authorization"] = token;
    headers["Cache-Control"] = "no-cache";
  }

  if (options.hasOwnProperty("isJsonRequest") && options.isJsonRequest) {
    headers["Content-Type"] = "application/json";
  }

  if (options.hasOwnProperty("AdditionalParams") && options.AdditionalParams) {
    headers = { ...headers, ...options.AdditionalParams };
  }

  // headers["Access-Control-Allow-Origin"] = "*"
  headers["Content-Type"] = "multipart/form-data";

  /* setting appId as default */
  // headers['appid'] = 'hummz';

  return { headers };
};
