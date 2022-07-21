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
    Flex
  } from '@chakra-ui/react'

  import { IconButton } from "@chakra-ui/react";
  import {HamburgerIcon} from "@chakra-ui/icons";

  import React from 'react'

  export default function TopMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <IconButton icon={<HamburgerIcon/>} ref={btnRef} colorScheme='teal' onClick={onOpen} />
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
                <Link fontSize='18px'>Demo</Link>
                <Link fontSize='18px'>Features</Link>
                <Link fontSize='18px'>Pricing</Link>
                <Link fontSize='18px'>About Us</Link>
                <Link fontSize='18px'>FAQ</Link>
                <Link fontSize='18px'>Blog</Link>
              </Flex>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

