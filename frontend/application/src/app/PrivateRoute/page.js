"use server";

import { Navigate } from "react-router-dom";
import { useAuth } from "../authContext/page";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
