import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>; 

  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
