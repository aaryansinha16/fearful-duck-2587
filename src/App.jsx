import Navbar from "./Components/Navbar/MainNavbar/Navbar";
import "./App.css";
import { Box, Spacer } from "@chakra-ui/react";
import TopSec from "./Components/TopSection/TopSec";
import RespNav from "./Components/Navbar/ResponsiveNavbar/RespNav";

export default function App() {
  return (
    <div className="App">
      <Box className="deskNav">
        <Box borderTop="4px solid #4EA819"
          boxShadow="lg"
          p="1"
          display="fixed"
          width="100%">
        <Navbar />
        </Box>
      </Box>

        {/* <br/>
        <br/>
        <br/>
        <br/> */}

      <Box border='1px solid red' marginTop='30px'>
        <RespNav/>
      </Box>

      <Box
        borderRadius="0% 0% 100% 100% / 0% 39% 61% 61%"
        bg="gray.200"
        h="80vh"
        w="100%"
      >
        <TopSec />

      </Box>
    </div>
  );
}
