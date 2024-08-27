import axios from "axios";

const axiosInterceptorInstance = axios.create({
  baseURL: "https://66c6ec09732bf1b79fa4984c.mockapi.io/",
});

// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    // Modify the response data here
    return response;
  },
  (error) => {
    // Handle response errors here
    try {
      if (error.response.status === 401) {
        window.location.href = "/"; // Navigates the user to the auth page (login page or ...)
      }
      const expectedError =
        error.response &&
        error.response.state >= 400 &&
        error.response.status < 500;

      // if error doesn't expected, can handle it below here
      if (!expectedError) {
        // console.error(error)
        try {
          // console.error(error)
        } catch (error) {
          // console.error(error)
        }
      }
    } catch (error) {
      // console.error(error)
    }
    return Promise.reject(error);
  }
);

// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

export default axiosInterceptorInstance;
