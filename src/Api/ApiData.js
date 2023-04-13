import axios from "axios";

const BASE_URL ="http://localhost:2500";
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


  export const getHttpOptions = (options = defaultHeaders) => {
    let headers = {};
    let token = localStorage.getItem("persist:adminAuth_satdham");
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
    let token = localStorage.getItem("persist:adminAuth_satdham");
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