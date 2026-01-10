import { useEffect } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

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
  const { logout } = useAuth();
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    // 🔐 Request interceptor → attach token
    const requestInterceptor = axiosSecure.interceptors.request.use(
      async (config) => {
        const currentUser = auth.currentUser;

        if (currentUser) {
          const token = await currentUser.getIdToken();
          config.headers.authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    // 🚫 Response interceptor → handle auth errors
    const responseInterceptor = axiosSecure.interceptors.response.use(
      (res) => res,
      async (error) => {
        const status = error.response?.status;

        if (status === 401 || status === 403) {
          await logout();
          navigate("/login");
        }

        return Promise.reject(error);
      }
    );

    // 🧹 Cleanup interceptors
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [auth, logout, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
