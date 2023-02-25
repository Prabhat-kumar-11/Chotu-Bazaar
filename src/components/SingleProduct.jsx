import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/alert";
import { Button } from "@chakra-ui/button";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Badge, Box, Heading, Stack, Text } from "@chakra-ui/layout";
import { SkeletonCircle, SkeletonText } from "@chakra-ui/skeleton";
import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router";

function getProducts(id) {
  if (id) {
    return axios.get(`https://fakestoreapi.com/products/${id}`);
  } else {
    return axios.get(`https://fakestoreapi.com/products`);
  }
}

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    case "DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
export const SingleProduct = () => {
  const { id } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOADING", payload: true });
    getProducts(id)
      .then((res) => dispatch({ type: "DATA", payload: res.data }))
      .catch((err) => dispatch({ type: "ERROR", payload: err }))
      .finally(() => dispatch({ type: "LOADING", payload: false }));
  }, [id]);

  

  if (state.isLoading) {
    return (
      <>
        <Box padding="6" boxShadow="lg" bg="white" my={5}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" marginTop={5}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
      </>
    );
  } else if (state.error)
    return (
      <>
        <Alert marginTop={5} status="error">
          <AlertIcon />
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>Please try again later.</AlertDescription>
        </Alert>
      </>
    );
  return (<Box display={"flex"} justifyContent={"center"}>
 <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    my={"20px"}
    width={"700px"}
  >
    <Image
      // objectFit='cover'
      // maxW={{ base: '100%', sm: '200px' }}
      width={"400px"}
      src= {state.data?.image}
      alt='product'
    />
  
    <Stack>
      <CardBody>
        <Heading size='md'>{state.data?.title}</Heading>
  
        <Text py='2'>
        {state.data?.description}
        </Text>
        <Badge colorScheme='green'>Rate  {state.data?.rating.rate}</Badge>
        <Badge colorScheme='purple'>{state.data?.rating.count}</Badge>
      </CardBody>
  
      <CardFooter>
      
        <Button variant='solid' colorScheme='blue'>
        $ {state.data?.price}
        </Button>
      </CardFooter>
    </Stack>
  </Card>
  </Box>
    
  );
};
