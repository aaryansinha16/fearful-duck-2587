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
    Link
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
  
            <DrawerBody>
              <HStack>
                <Link>Demo</Link>
                <Link>Features</Link>
                <Link>Pricing</Link>
                <Link>About Us</Link>
                <Link>FAQ</Link>
                <Link>Blog</Link>
              </HStack>
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

