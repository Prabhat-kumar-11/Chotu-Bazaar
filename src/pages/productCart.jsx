import {
  Box,
  Text,
  Button,
  Card,
  CloseButton,
  Image,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import ThankYouModal from "../components/thankyouModal";
import { AuthContext } from "../context/AuthContextProvider";
import {HiOutlineEmojiSad } from "react-icons/hi";

const ProductCart = () => {
  const { removeCartItem, cartItems, updateCartItem, clearCart } =
    useContext(AuthContext);
  const { isOpen, onClose, onOpen } = useDisclosure();

  function calculateTotalPrice() {
    let sum = 0;
    cartItems.forEach((element) => {
      sum += element.price * element.quantity;
    });
    return sum.toFixed(2);
  }

  return (
    <>
      {cartItems.length == 0 ? (
        <Box margin={"100"}>
          <Center>
          <Text fontSize='50px' color='tomato' display={"flex"} >"No Product is added"<HiOutlineEmojiSad/></Text>
          </Center>
          
        </Box>
      ) : (
        <Box my="10">
          <Box
            shadow="lg"
            border={"1px"}
            borderColor="blue.400"
            maxHeight={"lg"}
            overflow="auto"
          >
            {cartItems?.map((item) => (
              <Card
                display={"grid"}
                gridTemplateColumns="repeat(5,1fr)"
                gridTemplateRows={"repeat(1,80px)"}
                gap="8"
                mt="8"
                key={item.id}
                shadow="none"
                py={"10px"}
              >
                <Image justifySelf="center" height={"100%"} src={item.image} />
                <Text
                  maxW={"40ch"}
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  alignSelf="center"
                >
                  {item.title}
                </Text>
                <Box display={"flex"} gap="4" alignItems="center">
                  <Button
                    colorScheme={"gray"}
                    isDisabled={item.quantity == 1}
                    onClick={() => {
                      updateCartItem(item.id, -1);
                    }}
                  >
                    <AiOutlineMinus />
                  </Button>
                  <Button
                    width={"50px"}
                    border={"1px"}
                    p={"10px"}
                    fontWeight={"medium"}
                    colorScheme="orange"
                  >
                    {item.quantity}
                  </Button>
                  <Button
                    colorScheme={"gray"}
                    onClick={() => {
                      updateCartItem(item.id, 1);
                    }}
                  >
                    <BsPlusLg />
                  </Button>
                </Box>
                <Text alignSelf="center" fontWeight={"bold"} fontSize={"2xl"}>
                  $ {item.price}
                </Text>
                <CloseButton
                  alignSelf="center"
                  size="lg"
                  color={"red.700"}
                  bgColor={"red.200"}
                  onClick={() => removeCartItem(item.id)}
                />
              </Card>
            ))}
          </Box>
          <Box my={"10px"}>
            <Box
              margin={"auto"}
              width={"600px"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Text fontSize={"3xl"} fontWeight={"bold"}>
                Total Prize
              </Text>
              <Text fontSize={"3xl"} fontWeight={"bold"}>
                $ {calculateTotalPrice()}
              </Text>
            </Box>
            <Button
              display={"flex"}
              alignItems="center"
              width="fit-content"
              mx={"auto"}
              colorScheme="messenger"
              p={"10px"}
              fontSize={"2xl"}
              size="lg"
              mt={"55px"}
              my={"10px"}
              onClick={() => {
                clearCart();
                onOpen();
              }}
            >
              Checkout
            </Button>
          </Box>
        </Box>
      )}

      <Box>
        <ThankYouModal isOpen={isOpen} onClose={onClose} />
      </Box>
    </>
  );
};

export default ProductCart;
