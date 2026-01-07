import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import Loader from "../components/Loader";
import PrivateRoute from "./PrivateRoute";

const AdminRoute = ({ children }) => {
  const { role, roleLoading } = useRole();

  if (roleLoading) {
    return <Loader />;
  }

  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <PrivateRoute>{children}</PrivateRoute>;
};

export default AdminRoute;
