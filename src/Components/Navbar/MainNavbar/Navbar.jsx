import { Box, Button, Image, Heading, Flex, Link } from "@chakra-ui/react";
import DropDown from "./DropDown";
import "./navbar.module.css";

export default function Navbar() {
  return (
    <Flex
      justifyContent="space-between"
      gap="50px"
      alignItems="center"
      width="75%"
      margin="auto"
      pt={5}
      pb={5}
    >
      <Box w="20%">
        <Flex alignItems="center">
          <Image
            src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/9e85a16a-c862-4238-9ca5-f5dfa2df8a84.png?auto=format&ixlib=react-9.0.3"
            w="3rem"
          />
          <Heading as="h1" size="lg" fontWeight="medium">
            DeskTime
          </Heading>
        </Flex>
      </Box>

      <Flex style={{gap:"25px", alignItems:"center"}} className="navDiv">
        <Box color='lightText' >
          <a href="#">Demo</a>
        </Box>
        <Box color='lightText'>
          <a href="#">Features</a>
        </Box>
        <Box color='lightText'>
          <a href="#">Pricing</a>
        </Box>
        <Box color='lightText'>
          <a href="#">About us</a>
        </Box>
        <Box color='lightText'>
          <a href="#">FAQ</a>
        </Box>
        <Box color='lightText'>
          <a href="#">Blog</a>
        </Box>
        <Box>
          <Button variant="outline" fontSize="14px" p={2} fontWeight="500">
            LOGIN
          </Button>
        </Box>
        <Box>
          <Button
            varient="solid"
            fontSize="14px"
            p={2}
            colorScheme="green"
            background="primary"
            border='1px'
            borderColor='outline'
            fontWeight="400"
          >
            SIGN UP
          </Button>
        </Box>
        <Box>
          <DropDown />
        </Box>
      </Flex>
    </Flex>
  );
}
