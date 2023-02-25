import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import logo from "../assets/Image/chotuBazaar.png";

import { AiOutlineShoppingCart, AiOutlineTag } from "react-icons/ai";
import { RiWechatLine } from "react-icons/ri";
import { SlBriefcase } from "react-icons/sl";
import { MdAppSettingsAlt } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Box as="section" boxShadow="md">
        <Box maxWidth="8xl" mx="auto">
          <Box as="nav" bg="bg-surface">
            <Box
              py={{
                base: "4",
                lg: "5",
              }}
              px={{
                base: "4",
                lg: "5",
              }}
            >
              <HStack>
                {isDesktop ? (
                  <Flex justify="space-between" flex="1">
                    <ButtonGroup variant="link" spacing="10">
                      <Button
                        _hover={{ color: "black" }}
                        leftIcon={<SlBriefcase />}
                        fontSize="xl"
                      >
                        For Businesses
                      </Button>
                      <Button
                        _hover={{ color: "black" }}
                        leftIcon={<MdAppSettingsAlt />}
                        fontSize="xl"
                      >
                        Download The App
                      </Button>
                    </ButtonGroup>

                    <ButtonGroup variant="link" spacing="10">
                      <Button
                        _hover={{ color: "black" }}
                        leftIcon={<AiOutlineTag />}
                        fontSize="xl"
                      >
                        {"Deals"}
                      </Button>
                      <Button
                        _hover={{ color: "black" }}
                        leftIcon={<BsShop />}
                        fontSize="xl"
                      >
                        {"Visit Our Store"}
                      </Button>
                      <Button
                        _hover={{ color: "black" }}
                        leftIcon={<HiOutlineCurrencyRupee />}
                        fontSize="xl"
                      >
                        {"Discounts on Premium Ads"}
                      </Button>
                      <Button
                        _hover={{ color: "black" }}
                        leftIcon={<AiOutlineShoppingCart />}
                        fontSize="xl"
                      >
                        {"Cart"}
                      </Button>
                      <Button
                        _hover={{ color: "black" }}
                        leftIcon={<RiWechatLine />}
                        fontSize="xl"
                      >
                        NXT
                      </Button>
                    </ButtonGroup>
                  </Flex>
                ) : (
                  <div></div>
                )}
              </HStack>
              <Box
                pt={{
                  base: "4",
                  lg: "5",
                }}
                display="flex"
                justifyContent={"space-between"}
                alignItems="center"
                gap={2}
              >
                <RxHamburgerMenu size={30} cursor="pointer" />
                <RouterLink to="/">
                  <Image
                    width={"200px"}
                    objectFit="cover"
                    src={logo}
                    alt="chotu Bazaar"
                    mr={"auto"}
                  />
                </RouterLink>
                <InputGroup width={700} mr="auto">
                  <Input
                    borderColor="blue.300"
                    placeholder="Search in All India"
                  />
                  <InputRightAddon cursor="pointer">
                    <BiSearch />
                  </InputRightAddon>
                </InputGroup>
                <Button
                  color={"gray.500"}
                  _hover={{ color: "black" }}
                  bg="bg-surface"
                  fontSize="xl"
                  leftIcon={<CgProfile size={30} />}
                >
                  Login/Register
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box py={4} boxShadow="md">
        <Box
          display="flex"
          justifyContent={"space-between"}
          maxWidth="8xl"
          mx="auto"
          px={{
            base: "4",
            lg: "5",
          }}
        >
          <RouterLink to={"/products?category=jeweleries"}>
            <Text _hover={{ textDecoration: "underline" }} fontWeight={"bold"}>
              Jeweleries
            </Text>
          </RouterLink>
          <RouterLink to={"/products?category=electronics"}>
            <Text _hover={{ textDecoration: "underline" }} fontWeight={"bold"}>
              Electronics
            </Text>
          </RouterLink>
          <RouterLink to={"/products?category=men_clothes"}>
            <Text _hover={{ textDecoration: "underline" }} fontWeight={"bold"}>
              Men clothes
            </Text>
          </RouterLink>
          <RouterLink to={"/products?category=women_clothes"}>
            <Text _hover={{ textDecoration: "underline" }} fontWeight={"bold"}>
              Women clothes
            </Text>
          </RouterLink>
          <RouterLink to={"/products"}>
            <Text _hover={{ textDecoration: "underline" }} fontWeight={"bold"}>
              All Products
            </Text>
          </RouterLink>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
