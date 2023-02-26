import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";
import { LoginModalContext } from "../context/LoginModalContext";

const PrivateRoute = ({ children }) => {
  const {
    authToken: { isAuth },
  } = useContext(AuthContext);

  const { onOpen } = useContext(LoginModalContext);

  useEffect(() => {
    if (!isAuth) {
      onOpen();
    }
  }, [isAuth]);

  if (!isAuth) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default PrivateRoute;
