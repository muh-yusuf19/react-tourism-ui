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
  useToast,
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import CartDrawer from "./CartDrawer"
import LinkList from "./LinkList"
import MobileMenu from "./MobileMenu"
import { useAuth } from "../context/authCtx"

const Navbar = () => {
  const { auth, setAuth } = useAuth()

  // React router
  const navigate = useNavigate()

  // Chakra UI toast
  const toast = useToast()

  // Logout function
  const logout = () => {
    setAuth({})
    navigate("/")
    toast({
      title: "Logout...",
      description: "You are successfully logout",
      status: "success",
      position: "bottom-right",
      duration: 5000,
      isClosable: true,
    })
  }
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
        <Hide above="md">
          <MobileMenu />
        </Hide>

        {/* Logo */}
        <Link to="/">
          <Image objectFit={"contain"} src={`/logo.png`} h={["10", "14"]} />
        </Link>

        {/* Menu */}
        {/* <Hide above="lg">
          <CartDrawer />
        </Hide> */}

        {/* Menu Item */}
        <Show above="md">
          <LinkList />
        </Show>

        {/* CTA */}
        <HStack spacing={"4"}>
          <Hide below="lg">
            <IconButton
              borderRadius={"full"}
              icon={<FontAwesomeIcon icon={faHeart} />}
            />
          </Hide>
          <CartDrawer />
          <Hide below="lg">
            <Menu>
              <MenuButton>
                <Avatar size={"sm"} icon={<FontAwesomeIcon icon={faUser} />} />
              </MenuButton>
              {auth?.accessToken && (
                <MenuList px={"2"}>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem onClick={() => logout()}>Logout</MenuItem>
                </MenuList>
              )}
            </Menu>
          </Hide>
        </HStack>
      </HStack>
    </>
  )
}

export default Navbar
