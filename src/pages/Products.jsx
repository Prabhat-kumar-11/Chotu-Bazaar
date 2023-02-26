import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/alert";
import { Button, ButtonGroup } from "@chakra-ui/button";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Box, Divider, Grid, Heading, Stack, Text } from "@chakra-ui/layout";
import { SkeletonCircle, SkeletonText } from "@chakra-ui/skeleton";
import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

function getProducts(category) {
  if (category) {
    let categoryValue;
    switch (category) {
      case "men_clothes":
        categoryValue = "men's clothing";
        break;
      case "women_clothes":
        categoryValue = "women's clothing";
        break;
      case "electronics":
        categoryValue = "electronics";
        break;
      case "jeweleries":
        categoryValue = "jewelery";
        break;
      default:
        categoryValue = "";
    }

    return axios.get(
      `https://fakestoreapi.com/products/category/${categoryValue}`
    );
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

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { addCartItem } = useContext(AuthContext);

  const category = searchParams.get("category");

  useEffect(() => {
    dispatch({ type: "LOADING", payload: true });
    getProducts(category)
      .then((res) => dispatch({ type: "DATA", payload: res.data }))
      .catch((err) => dispatch({ type: "ERROR", payload: err }))
      .finally(() => dispatch({ type: "LOADING", payload: false }));
  }, [searchParams]);

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
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr ", lg: "1fr 1fr 1fr" }}
      placeItems="center"
      gap="10"
      my={5}
    >
      {state.data?.map((product) => (
        <Card key={product.id} maxW="sm">
          <CardBody>
            <Link to={`/products/${product.id}`}>
              <Image
                cursor={"pointer"}
                height={"sm"}
                src={product.image}
                alt="product"
                borderRadius="lg"
                mx="auto"
              />
            </Link>

            <Stack mt="6" spacing="3">
              <Link to={`/products/${product.id}`}>
                <Heading
                  cursor={"pointer"}
                  _hover={{ textDecoration: "underline" }}
                  textAlign="center"
                  size="md"
                >
                  {product.title.substring(0, 40)}
                </Heading>
              </Link>

              <Text>{product.description.substring(0, 150)}</Text>
              <Text color="blue.600" fontSize="2xl">
                $ {product.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Link to={`/products/${product.id}`}>
                <Button cursor={"pointer"} variant="solid" colorScheme="blue">
                  Buy now
                </Button>
              </Link>

              <Button
                onClick={() =>
                  addCartItem({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                  })
                }
                cursor={"pointer"}
                colorScheme="green"
              >
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Grid>
  );
};

export default Products;
