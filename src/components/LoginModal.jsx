import React, { useContext, useEffect, useReducer, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Box,
  FormLabel,
  Button,
  Text,
  Progress,
} from "@chakra-ui/react";
import { LoginModalContext } from "../context/LoginModalContext";
import axios from "axios";
import { AuthContext } from "../context/AuthContextProvider";
import { useToast } from "@chakra-ui/react";

const LoginModal = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const { isOpen, onClose } = useContext(LoginModalContext);
  const { loginUser } = useContext(AuthContext);
  const firstField = React.useRef(null);

  function getLogin() {
    setIsLoading(true);
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: userName,
        password: password,
      })
      .then((response) => {
        toast({
          title: "Login Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          variant: "left-accent",
          containerStyle: {
            fontSize: "22",
            lineHeight: "10",
            py: "6",
          },
        });
        loginUser(response.data);
        setUserName("");
        setPassword("");
        onClose();
      })
      .catch((error) => {
        toast({
          title: error.response.data,
          status: "error",
          duration: 5000,
          isClosable: true,
          variant: "left-accent",
          containerStyle: {
            fontSize: "22",
            lineHeight: "10",
            py: "6",
          },
        });
      })
      .finally(() => setIsLoading(false));
  }

  function handleLogin() {
    getLogin();
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {isLoading && (
            <Progress
              isIndeterminate
              hasStripe={true}
              isAnimated={true}
              size="sm"
            />
          )}
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box mb={6}>
              <Text fontWeight={600} color={"yellow.800"}>
                Note: Please Login with these credentials: -
              </Text>
              <Text>Username: donero</Text>
              <Text>Password: ewedon</Text>
            </Box>
            <Box>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                value={userName}
                ref={firstField}
                id="username"
                placeholder="Enter you username to login"
                autoComplete="off"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <FormLabel mt={4} htmlFor="password">
                Password
              </FormLabel>
              <Input
                value={password}
                ref={firstField}
                id="password"
                autoComplete="off"
                placeholder="Enter your Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              isDisabled={isLoading}
              onClick={handleLogin}
              colorScheme="blue"
            >
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
