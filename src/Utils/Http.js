import config from "../Config/Config";
import axios from "axios";

const BACKEND_URL = config.BACKEND_URL;

let axiosClient = axios.create({
  baseURL: BACKEND_URL,
  timeout: 10000,
  headers: { authorization: localStorage.getItem("token") },
});

export const get = (path, params = {}) => {
  return new Promise((resolve, reject) => {
    axiosClient
      .get(path, {
        params,
      })
      .then(function (response) {
        response = response.data;
        if (response.statusCode.toString() === "200") {
          return resolve(response.data);
        } else {
          return reject(response);
        }
      })
      .catch(function (error) {
        return reject(error);
      });
  });
};

export const post = (path, data) => {
    return new Promise((resolve, reject) => {
        axiosClient.post(path, data)
            .then(function (response) {
                response = response.data;
                if (response.statusCode.toString() === '200') {
                    return resolve(response.data);
                } else {
                    return reject(response);
                }
            })
            .catch(function (error) {
                return reject(error);
            })
    });
}

export const patch = (path, data) => {
  return new Promise((resolve, reject) => {
    axiosClient
      .patch(path, data)
      .then(function (response) {
        response = response.data;
        if (response.statusCode.toString() === "200") {
          return resolve(response.data);
        } else {
          return reject(response);
        }
      })
      .catch(function (error) {
        return reject(error);
      });
  });
};

export const deleteRecord = (path, params = {}) => {
  return new Promise((resolve, reject) => {
    axiosClient
      .delete(path, {
        params,
      })
      .then(function (response) {
        response = response.data;
        if (response.statusCode.toString() === "200") {
          return resolve(response.data);
        } else {
          return reject(response);
        }
      })
      .catch(function (error) {
        return reject(error);
      });
  });
};
