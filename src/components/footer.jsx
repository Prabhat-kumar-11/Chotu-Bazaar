import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { RiLinkedinFill } from "react-icons/ri";
import { CgFacebook, CgTwitter } from "react-icons/cg";
import { IoLogoGoogleplus } from "react-icons/io";
import { TfiYoutube, TfiMicrosoftAlt } from "react-icons/tfi";
import { SiApple } from "react-icons/si";
import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <Box borderTop="2px" borderColor="gray.200" as="footer">
      <Container maxW="8xl">
        <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} py={7}>
          <GridItem w="100%" borderRight={"2px"} borderColor="gray.200" pr={6}>
            <Box
              display="flex"
              justifyContent="space-between"
              fontSize="md"
              color="black.500"
            >
              <Text>About Us</Text>
              <Text>Contact Us</Text>
              <Text>Careers</Text>
              <Text>Quiker Videos</Text>
              <Text>Advertise With Us</Text>
              <Text>Blog</Text>
              <Text>Help</Text>
            </Box>
            <Text fontSize="md" my={5} lineHeight="tall" color="gray.500">
              Widely known as India’s no. 1 online classifieds platform, Quikr
              is all about you. Our aim is to empower every person in the
              country to independently connect with buyers and sellers online.
              We care about you — and the transactions that bring you closer to
              your dreams. Want to buy your first car? We’re here for you. Want
              to sell commercial property to buy your dream home? We’re here for
              you. Whatever job you’ve got, we promise to get it done.
            </Text>
            <Box
              display="flex"
              p={4}
              bgColor="blackAlpha.50"
              alignItems="center"
              gap="5"
            >
              <Text>
                At ChotuBazaar ,you can buy, sell or rent anything you can think
                of.
              </Text>
              <Button bg="yellow" colorScheme="black" variant="outline">
                Post Free Ad
              </Button>
            </Box>
            <Box display="flex" fontSize="md" color="black.500" gap={4} mt={6}>
              <Text>Listing Policy</Text>
              <Text>Term of Use</Text>
              <Text>Privacy Policy</Text>
              <Text>ChotuBazaar Moblies Policy</Text>
              <Text>ChotuBazaar Brand Guidelines</Text>
              <Text>Sitemap</Text>
              <Text>News</Text>
            </Box>
            <Box display="flex" fontSize="md" color="black.500" gap={4} mt={6}>
              <Text>Other Brands: Connomfloor</Text>
              <Text>Hiree</Text>
              <Text>Dazzlr</Text>
              <Text>Realty Compass</Text>
              <Text>Zefo</Text>
            </Box>
          </GridItem>
          <GridItem w="100%" pl={6}>
            <Box>
              <UnorderedList
                listStyleType="none"
                display="grid"
                gap="2"
                margin={0}
                gridTemplateColumns={"1fr 1fr 1fr"}
              >
                <ListItem>Ahmedabad</ListItem>
                <ListItem>Bangalore</ListItem>
                <ListItem>Chandigarh</ListItem>
                <ListItem>Chennai</ListItem>
                <ListItem>Colmbatore</ListItem>
                <ListItem>All Cities</ListItem>
                <ListItem>Delhi</ListItem>
                <ListItem>Gurgaon</ListItem>
                <ListItem>Hyderabad</ListItem>
                <ListItem>Jaipur</ListItem>
                <ListItem>Kochi</ListItem>
                <ListItem>Kolkata</ListItem>
                <ListItem>Lucknow</ListItem>
                <ListItem>Mumbai</ListItem>
                <ListItem>Pune</ListItem>
                <ListItem>Trivandrum</ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Box mt={6} display="flex" gap={7}>
                <Text as="b">Follow us</Text>{" "}
                <CgFacebook size={25} cursor="pointer" />
                <RiLinkedinFill size={25} cursor="pointer" />
                <IoLogoGoogleplus size={25} cursor="pointer" />{" "}
                <CgTwitter size={25} cursor="pointer" />
                <TfiYoutube size={25} cursor="pointer" />
              </Box>
              <Box mt={6} display="flex" gap={7}>
                <Text as="b">Download The App</Text>
                <SiApple size={25} cursor="pointer" />
                <FaGooglePlay size={25} cursor="pointer" />
                <TfiMicrosoftAlt size={25} cursor="pointer" />
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
