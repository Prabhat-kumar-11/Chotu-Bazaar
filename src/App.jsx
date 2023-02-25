import { Box, Container } from "@chakra-ui/react";
import GalleryCarousel from "./components/carousel";
import Footer from "./components/footer";
import LoginModal from "./components/LoginModal";
import Navbar from "./components/navbar";
import AllRoutes from "./Routes/allRoutes";

function App() {
  return (
    <>
      <Navbar />
      <Box minH={"60vh"}>
        <Container maxWidth={"8xl"}>
          <AllRoutes />
          <LoginModal />
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default App;
