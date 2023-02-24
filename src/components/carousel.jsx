import { Image } from "@chakra-ui/image";
import { Box, Center, Container, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const GalleryCarousel = () => {
  const carouselData = [
    {
      id: 1,
      name: "All Furnitures",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/mid-century-double-pop-up-coffee-table-walnut-white-marble-2-c-1592928072.jpg?resize=1200:*",
    },
    {
      id: 2,
      name: "All Electronics",
      image:
        "https://pricenmore.com/in/wp-content/uploads/sites/2/2018/02/PRICEnMORE-Banner-1170x500.jpg",
    },
    {
      id: 3,
      name: "sofa sets",
      image:
        "https://wakefitdev.gumlet.io/img/sofa-sets/lifestyle/WSFABLZN3FVBL.jpg?w=732",
    },
    {
      id: 4,
      name: "Bed sets",
      image:
        "https://images-cdn.ubuy.co.in/634004715793a01c9b2116a1-bedsure-black-bed-set-king-8-pieces.jpg",
    },
    {
      id: 5,
      name: "Wardrobes",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZqFvHy8xfj1Hk5FmyfpGUpruCxhCA6iKc3w&usqp=CAU",
    },
    {
      id: 6,
      name: "Tvs",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqO6bcMYG7PHblpHWo40vAO8K1aTrem552hg&usqp=CAU",
    },
    {
      id: 7,
      name: "Laptop",
      image: "https://m.media-amazon.com/images/I/71S8U9VzLTL._SY450_.jpg",
    },
    {
      id: 8,
      name: "Refrigerators",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSsaxLwOZaWFS0raAivDD5YHIlpCy9fN__6g&usqp=CAU",
    },
    {
      id: 9,
      name: "Dining Tables",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpM2Xyf6q4ODaW1N9wuyD3n7OX5mnQ90kxNA&usqp=CAU",
    },
    {
      id: 10,
      name: "Office Furnitures",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgx59oDUYGiD5TFeyyzk8raQSsPPNa2Hz-ng&usqp=CAU",
    },
    {
      id: 11,
      name: "Washing machine",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLOJATWvZrJ5pfZPr4_fHY2xZe45bCfYIe8g&usqp=CAU",
    },
    {
      id: 12,
      name: "Mobiles",
      image:
        "https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max",
    },
    {
      id: 13,
      name: "Air Conditioners",
      image:
        "https://th.sharp/sites/default/files/uploads/2021-06/Picture2.jpg",
    },
    {
      id: 14,
      name: "Speakers",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2fz_KETnSvHCg36nihAkuKZCxMgIIGahBA&usqp=CAU",
    },
    {
      id: 15,
      name: "Gaming consoles",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTxcIg9pPD4md1mZi-4ez0yGBNHr5tdTyBeA&usqp=CAU",
    },
    {
      id: 16,
      name: "Jewelleries",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXE4A2QHO_v6kwFDZGDp0suCeTlzdNkNFMbg&usqp=CAU",
    },
    {
      id: 17,
      name: "Clothes",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMEIXEKjIyZdQz3BIQj9Frmos-zroSkqrnlw&usqp=CAU",
    },
    {
      id: 18,
      name: "Shoes",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8iyiV2a8fVSJqUSvhadxH8Lpbb42L59AYYA&usqp=CAU",
    },
    {
      id: 19,
      name: "Camera",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWMdM_wIdY0QZj6H_7I8B3xXJ48yH9WxD1w&usqp=CAU",
    },
    {
      id: 20,
      name: "Supplements",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUO1503Y58daAWph6xverZVAlXZsl_zlG8w&usqp=CAU",
    },
  ];

  return (
    <Container border={"1px"} borderRadius={"10px"} my={"4"} maxW={"8xl"}>
      <Carousel responsive={responsive}>
        {carouselData.map((data) => (
          <Box key={data.id} py={5}>
            <Center>
              <Image borderRadius={"10"} height={"200px"} src={data.image} />
            </Center>
            <Text  textAlign="center" fontWeight={"bold"}>{data.name}</Text>
          </Box>
        ))}
      </Carousel>
    </Container>
  );
};

export default GalleryCarousel;
