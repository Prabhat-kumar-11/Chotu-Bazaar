import { Image } from "@chakra-ui/image";
import { Box, Grid, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import GalleryCarousel from "../components/carousel";
import { MdArrowForwardIos } from "react-icons/md";
import axios from "axios";
import { Card } from "@chakra-ui/card";

const getFetch = () => {
  return axios.get(`https://dummyjson.com/products`);
};

const Home = () => {
  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    getFetch().then((res) => {
      setDataProducts(res.data.products);
    });
  }, []);

  console.log(dataProducts);
  return (
    <>
      <Text fontSize={"2xl"} my={5} fontWeight={"bold"}>
        Most Popular Products
      </Text>
      <GalleryCarousel />
      <Text fontSize={"4xl"} my={5} fontWeight={"bold"} textAlign={"center"}>
        Buy and Sell from 1200+ Cities Across India
      </Text>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr ", lg: "1fr 1fr 1fr" }}
        placeItems="center"
        gap="10"
      >
        <Box margin={"10px"}>
          <Image
            height={"100px"}
            width={"800px"}
            src={"https://www.lavamobiles.com/images/card-feature-phones.jpg"}
          />
          <Box p={"5"} bgColor={"gray.100"}>
            <Text
              display={"flex"}
              justifyContent={"space-between"}
              p={"5"}
              borderBottom={"1px"}
            >
              Tablets <MdArrowForwardIos />
            </Text>
            <Text
              display={"flex"}
              justifyContent={"space-between"}
              p={"5"}
              borderBottom={"1px"}
            >
              Accessories <MdArrowForwardIos />
            </Text>
            <Text
              display={"flex"}
              justifyContent={"space-between"}
              p={"5"}
              borderBottom={"1px"}
            >
              Wearables <MdArrowForwardIos />
            </Text>
            <Text
              display={"flex"}
              justifyContent={"space-between"}
              p={"5"}
              borderBottom={"1px"}
            >
              Used Mobiles <MdArrowForwardIos />
            </Text>
            <Text display={"flex"} justifyContent={"space-between"} p={"5"}>
              View All <MdArrowForwardIos />
            </Text>
          </Box>
        </Box>
        <Box margin={"10px"}>
          <Image
            height={"100px"}
            width={"800px"}
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaaOZOHYP4giLt3HqWL0AXnOqshVlBs53EWSo1FWV2_PRYSYnIoFjDw2J_MirRlgKGg&usqp=CAU"
            }
          />
          <Box bgColor={"gray.100"} p={"5"}>
            <Text
              display={"flex"}
              justifyContent={"space-between"}
              p={"5"}
              borderBottom={"1px"}
            >
              Furniture & Decor <MdArrowForwardIos />{" "}
            </Text>
            <Text
              display={"flex"}
              justifyContent={"space-between"}
              p={"5"}
              borderBottom={"1px"}
            >
              Sports, Hobbies & Fashion <MdArrowForwardIos />{" "}
            </Text>
            <Text
              display={"flex"}
              justifyContent={"space-between"}
              p={"5"}
              borderBottom={"1px"}
            >
              Luggages <MdArrowForwardIos />{" "}
            </Text>

            <Text
              display={"flex"}
              justifyContent={"space-between"}
              p={"5"}
              borderBottom={"1px"}
            >
              household Items <MdArrowForwardIos />{" "}
            </Text>
            <Text display={"flex"} justifyContent={"space-between"} p={"5"}>
              View All <MdArrowForwardIos />{" "}
            </Text>
          </Box>
        </Box>
        <Box margin={"10px"}>
          <Image
            height={"100px"}
            width={"800px"}
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpn-rJTbVuCiTveFWmsUmSDP8j8JCrlVVi_w&usqp=CAU"
            }
          />
          <Box p={"5"} bgColor={"gray.100"}>
            <Text
              display={"flex"}
              justifyContent={"space-between"}
              p={"5"}
              borderBottom={"1px"}
            >
              Laptop & Accessories <MdArrowForwardIos />
            </Text>
            <Text
              display={"flex"}
              justifyContent={"space-between"}
              p={"5"}
              borderBottom={"1px"}
            >
              TV-DVD-Multimedia <MdArrowForwardIos />{" "}
            </Text>
            <Text
              display={"flex"}
              justifyContent={"space-between"}
              p={"5"}
              borderBottom={"1px"}
            >
              Camera & Accessories <MdArrowForwardIos />{" "}
            </Text>

            <Text
              display={"flex"}
              justifyContent={"space-between"}
              p={"5"}
              borderBottom={"1px"}
            >
              Kitchen Appliances <MdArrowForwardIos />{" "}
            </Text>
            <Text display={"flex"} justifyContent={"space-between"} p={"5"}>
              View All <MdArrowForwardIos />{" "}
            </Text>
          </Box>
        </Box>
      </Grid>
      <Text fontSize={"2xl"} my={5} fontWeight={"bold"}>
        Deals of the day
      </Text>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr ", lg: "1fr 1fr 1fr 1fr" }}
        placeItems="center"
        gap="10"
        my={5}
        
      >
        {dataProducts.map((data) => (
          <Card cursor={"pointer"} key={data.id}>
            <Image height={"150px"} width={"250px"} src={data.images[0]} />
            <Text bg={"gray.100"} py={"5"} textAlign={"center"} fontWeight={"bold"}>
              {data.title}
            </Text>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default Home;
