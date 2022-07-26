import { Box } from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    HStack,
    Link,
    Flex,
    Text
  } from '@chakra-ui/react'

  import { NavLink } from "react-router-dom";

  import { IconButton } from "@chakra-ui/react";
  import {HamburgerIcon} from "@chakra-ui/icons";

  import { useAuthState } from "react-firebase-hooks/auth";
  import { auth } from "../../../Authentication/firebase";

  import React, {useState, useEffect} from 'react'

  import { logout } from "../../../Authentication/firebase";

  export default function TopMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const [user, loading, error] = useAuthState(auth);

    const [path, setPath] = useState(window.location.pathname)

    useEffect(() => {
      setPath(window.location.pathname)
    }, [user, window.location.pathname])

  
    return (
      <Flex >
        <IconButton icon={<HamburgerIcon color='gray.700' fontSize='25px'/>} ref={btnRef} colorScheme='' onClick={onOpen} />
        <Drawer
          isOpen={isOpen}
          placement='top'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
  
            <DrawerBody textAlign='center'>
              <Flex flexDirection='column'>
                <Link to='/login' fontSize='18px' fontWeight='semibold' color='lightText' p={3} borderBottom='1px' borderColor='gray.200'>Demo</Link>
                <Link to='/login' fontSize='18px' fontWeight='semibold' color='lightText' p={3} borderBottom='1px' borderColor='gray.200'>Features</Link>
                <Link to='/login' fontSize='18px' fontWeight='semibold' color='lightText' p={3} borderBottom='1px' borderColor='gray.200'>Pricing</Link>
                <Link to='/login' fontSize='18px' fontWeight='semibold' color='lightText' p={3} borderBottom='1px' borderColor='gray.200'>About</Link>
                <Link to='/login' fontSize='18px' fontWeight='semibold' color='lightText' p={3} borderBottom='1px' borderColor='gray.200'>FAQ</Link>
                <Link to='/login' fontSize='18px' fontWeight='semibold' color='lightText' p={3} borderBottom='1px' borderColor='gray.200'>Blog</Link>
              </Flex>
            </DrawerBody>
  
            <Flex  justifyContent='center' mt='20px' mb='25px'>
              {/* <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button> */}


              {user === null ? <>
                  <Box>
                  <NavLink to='/login' >
                    <Button variant="outline"  fontSize="14px" p={2} fontWeight="500" onClick={onClose} mr={3}>
                      LOGIN
                    </Button>
                  </NavLink>
                </Box>
                <Box>
                  <NavLink to='/signup'>
                    <Button
                      varient="solid"
                      fontSize="14px"
                      p={2}
                      colorScheme="green"
                      background="primary"
                      border='1px'
                      borderColor='outline'
                      fontWeight="400"
                      onClick={onClose}
                    >
                      SIGN UP
                    </Button>
                  </NavLink>
                </Box>
                </>
                : <> <Box>
                  <NavLink to='/dashboard'>
                    <Button
                      varient="solid"
                      fontSize="14px"
                      p={2}
                      colorScheme="green"
                      background="primary"
                      border='1px'
                      borderColor='outline'
                      fontWeight="400"
                      onClick={onClose}
                    >
                      MY DESKTIME
                    </Button>
                  </NavLink>
                  <Button onClick={logout} colorScheme='red' color='white'>
                    Logout
                  </Button>
                </Box> </>}




            </Flex>
          </DrawerContent>
        </Drawer>
      </Flex>
    )
  }

