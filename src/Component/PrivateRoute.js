import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const authUser = useSelector((state) => state.auth?.user);

  if (!authUser?.id && authUser?.user_role?.slug != "admin") {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" />;
  }

  // authorized so return child components
  return children;
}

export default PrivateRoute;
