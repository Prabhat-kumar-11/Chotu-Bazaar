import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-multi-carousel/lib/styles.css";

// import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import LoginModalContextProvider from "./context/LoginModalContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <AuthContextProvider>
      <LoginModalContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LoginModalContextProvider>
    </AuthContextProvider>
  </ChakraProvider>
);
