import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    transition 
  } from "@chakra-ui/react";
  
  import { ChevronDownIcon, ChevronUpIcon, InfoIcon } from "@chakra-ui/icons";
  
  export default function DropDown() {
    return (
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              leftIcon={<InfoIcon />}
              isActive={isOpen}
              as={Button}
              rightIcon={!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
              bg="transparent"
              p={2}
              color="lightText"
            >
              EN
            </MenuButton>
            <MenuList>
              <MenuItem>English</MenuItem>
              <MenuItem onClick={() => alert("Kagebunshin")}>Espanol</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    );
  }
  