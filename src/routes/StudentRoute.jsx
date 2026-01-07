import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import Loader from "../components/Loader";
import PrivateRoute from "./PrivateRoute";

const StudentRoute = ({ children }) => {
  const { role, roleLoading } = useRole();

  if (roleLoading) {
    return <Loader />;
  }

  if (role !== "student") {
    return <Navigate to="/" replace />;
  }

  return <PrivateRoute>{children}</PrivateRoute>;
};

export default StudentRoute;
