import { Box } from "@chakra-ui/layout";
import GalleryCarousel from "./components/carousel";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <GalleryCarousel />
      <Box height={"100vh"}>
        <Footer />
      </Box>
    </>
  );
}

export default App;
