import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !!user && !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/users/role");
      return res.data;
    },
  });

  return {
    role: data?.role,
    roleLoading: loading || isLoading,
  };
};

export default useRole;
