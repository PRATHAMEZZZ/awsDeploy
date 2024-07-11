import React from "react";
import { Navigate, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("userData");
  return (
      isAuthenticated ? <Component/> : <Navigate to={'/login'}/>
  );
}

export default ProtectedRoute;