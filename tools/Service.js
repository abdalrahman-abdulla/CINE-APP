import axios from "axios";
axios.interceptors.request.use((config) => {
  config.baseURL = "https://api.themoviedb.org/3/";
  config.headers.Authorization = `Bearer ${
    localStorage.getItem("token") || ""
  }`;
  return config;
});
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;
    if (status === 401) {
      if (window.location.pathname != "/auth/login") {
        store.dispatch("logout");
      }
    }
    return Promise.reject(error);
  }
);
