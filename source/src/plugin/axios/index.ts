import Axios from 'axios';

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOTFOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER = 500,
  BAD_GATEWAY = 502,
}

Axios.defaults.baseURL = 'http://localhost:8080/';

Axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

Axios.interceptors.response.use(
  (response) => {
    if (response.status === HttpStatus.OK
      || response.status === HttpStatus.CREATED) {
      return response.data;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
