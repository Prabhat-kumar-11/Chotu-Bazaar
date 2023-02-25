import React, { useContext, useReducer, useState } from "react";

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
} from "@chakra-ui/react";
import { LoginModalContext } from "../context/LoginModalContext";

const initialState = {
  token:null,
  loading:false,
  error:null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'token':
      return {...state,token:action.payload};
    case 'loading':
      return {...state,token:action.payload};
      case 'error':
      return {...state,error:action.payload};
    default:
      return {state}
  }
}


const LoginModal = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

 

  const [state,dispatch] =useReducer(reducer,initialState)

  

  const { isOpen, onClose } = useContext(LoginModalContext);
  const firstField = React.useRef(null);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
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
                ref={firstField}
                id="username"
                placeholder="Enter you username to login"
                autoComplete="off"
                onClick={(e)=>{setUserName(e.target.value)}}
              />
              <FormLabel mt={4} htmlFor="password">
                Password
              </FormLabel>
              <Input
                ref={firstField}
                id="password"
                autoComplete="off"
                placeholder="Enter your Password"
                onClick={(e)=>{}}
              />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue">Login</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
