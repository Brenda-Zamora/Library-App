import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Spinner from "./Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <Spinner />;
  }
  return user ? children : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
