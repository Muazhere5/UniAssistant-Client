import { useEffect } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";

/**
 * Secure Axios instance
 * - Attaches Firebase JWT token
 * - Used for protected APIs
 */
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const auth = getAuth();

  useEffect(() => {
    const requestInterceptor = axiosSecure.interceptors.request.use(
      async (config) => {
        const currentUser = auth.currentUser;

        // ✅ Only attach token if available
        if (currentUser) {
          const token = await currentUser.getIdToken();
          config.headers.authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (res) => res,
      (error) => {
        // ❗ DO NOT force logout here
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [auth]);

  return axiosSecure;
};

export default useAxiosSecure;
