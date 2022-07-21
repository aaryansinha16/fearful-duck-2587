import Navbar from "./Components/Navbar/MainNavbar/Navbar";
import "./App.css";
import { Box, Spacer } from "@chakra-ui/react";
import RespNav from "./Components/Navbar/ResponsiveNavbar/RespNav";
import AllRoutes from "./Routes/AllRoutes";
// import TopSec from "./Components/HomePage/TopSection/TopSec";
// import Benifits from "./Components/HomePage/Benifits/Benifits";
// import HomePage from "./Components/HomePage/Homepage";

export default function App() {
  return (
    <div className="App">



      {/* Navbar */}
      <Box className="deskNav">
        <Box borderTop="4px solid #4EA819"
          boxShadow="lg"
          p="1"
          position="fixed"
          width="100%"
          top='0'
          zIndex='100'
          bgColor='white'>
        <Navbar />
        </Box>
      </Box>

      <Box className="respNav">
        <RespNav/>
      </Box>

      {/* Navbar ends */}
      <AllRoutes/>

      {/* <HomePage/> */}

    </div>
  );
}
