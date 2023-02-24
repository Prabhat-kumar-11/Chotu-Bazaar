import { Box, Container } from "@chakra-ui/react";
import GalleryCarousel from "./components/carousel";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import AllRoutes from "./Routes/allRoutes";

function App() {
  return (
    <>
      <Navbar />
      <Box minH={"60vh"}>
        <Container maxWidth={"8xl"}>
          <AllRoutes />
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default App;
