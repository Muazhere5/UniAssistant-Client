import axios from "axios";

/**
 * Public Axios instance
 * - No Authorization header
 * - Used for public & open APIs
 */
const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
