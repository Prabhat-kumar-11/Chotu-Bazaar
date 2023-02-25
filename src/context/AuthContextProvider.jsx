import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() => {
    let token = localStorage.getItem("token");
    if (token) {
      token = JSON.parse(token);
      return {
        isAuth: true,
        ...token,
      };
    }
    return { isAuth: false, token: null };
  });

  function loginUser(payload) {
    localStorage.setItem("token", JSON.stringify(payload.token));
    setAuthToken({
      isAuth: true,
      token: payload.token,
    });
  }

  function logoutUser() {
    localStorage.removeItem("token");
    setAuthToken({ isAuth: false, token: null });
  }

  return (
    <AuthContext.Provider value={{ authToken, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
