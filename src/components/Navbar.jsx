import {
  Avatar,
  Box,
  Button,
  Flex,
  Hide,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { Link } from "react-router-dom"
import CartDrawer from "./CartDrawer"
import LinkList from "./LinkList"
import MobileMenu from "./MobileMenu"

const Navbar = () => {
  return (
    <>
      {/* Login Registration */}
      <Flex
        px={["4", "6", "8"]}
        py={"2"}
        gap={"4"}
        align={"center"}
        justify={"end"}
      >
        <Link to="/login">
          <Button size={["xs", "sm"]} colorScheme={"green"}>
            Login
          </Button>
        </Link>
        <Box px={"0.5"} py={"4"} bg={"gray.800"} />
        <Link to="/register">
          <Button size={["xs", "sm"]} colorScheme={"blackAlpha"}>
            Register
          </Button>
        </Link>
      </Flex>

      {/* Main Menu */}
      <HStack
        py={"2"}
        px={["4", "6", "8"]}
        align={"center"}
        justify={"space-between"}
      >
        {/* List Menu */}
        <Hide above="lg">
          <MobileMenu />
        </Hide>

        {/* Logo */}
        <Link to="/">
          <Image objectFit={"contain"} src={`./logo.png`} h={["10", "14"]} />
        </Link>

        {/* Cart */}
        <Hide above="lg">
          <CartDrawer />
        </Hide>

        {/* Menu Item */}
        <Show above="lg">
          <LinkList />
        </Show>

        {/* CTA */}
        <Show above="lg">
          <HStack spacing={"4"}>
            <IconButton
              borderRadius={"full"}
              icon={<FontAwesomeIcon icon={faHeart} />}
            />
            <CartDrawer />
            <Menu>
              <MenuButton>
                <Avatar size={"sm"} icon={<FontAwesomeIcon icon={faUser} />} />
              </MenuButton>
              <MenuList px={"2"}>
                <MenuItem>Download</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Show>
      </HStack>
    </>
  )
}

export default Navbar
