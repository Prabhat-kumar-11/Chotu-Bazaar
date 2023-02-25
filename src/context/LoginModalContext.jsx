import React, { createContext } from "react";
import { useDisclosure } from "@chakra-ui/react";

export const LoginModalContext = createContext();

const LoginModalContextProvider = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <LoginModalContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </LoginModalContext.Provider>
  );
};

export default LoginModalContextProvider;
