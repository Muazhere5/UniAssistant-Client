import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

/**
 * Fetch logged-in user's role
 * Backend endpoint: GET /users/role
 */
const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const {
    data: roleData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !!user && !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/users/role");
      return res.data;
    },
  });

  return {
    role: roleData?.role || null,
    roleLoading: isLoading || loading,
    refetchRole: refetch,
  };
};

export default useRole;
