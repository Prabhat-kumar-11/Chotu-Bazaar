import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-multi-carousel/lib/styles.css";

// import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
