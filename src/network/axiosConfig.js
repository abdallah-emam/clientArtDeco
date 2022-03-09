import axios from "axios";

export const axiosInstace = axios.create({
  baseURL: "https://iti-art-deco.herokuapp.com/api/v1/",
});

// Add a request interceptor
axiosInstace.interceptors.request.use(
  function (config) {
    if (localStorage.getItem("company_token")) {
      config.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "company_token"
      )}`;
    } else if (localStorage.getItem("user_token")) {
      config.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "user_token"
      )}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstace.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    //  Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
