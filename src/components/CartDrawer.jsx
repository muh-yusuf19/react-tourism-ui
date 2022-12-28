import React from "react"
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Stack,
  Avatar,
  AvatarBadge,
  Heading,
} from "@chakra-ui/react"
import CartItem from "./CartItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useCartContext } from "../context/ctxCart"
import product from "../product.json"

const CartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const { cartItem } = useCartContext()

  return (
    <>
      <Avatar
        ref={btnRef}
        onClick={onOpen}
        size={"sm"}
        icon={<FontAwesomeIcon icon={faCartShopping} />}
      >
        {cartItem.length > 0 && (
          <AvatarBadge boxSize="1.5em" bg="green.500">
            {cartItem.length}
          </AvatarBadge>
        )}
      </Avatar>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={["xs", "md"]}
        scrollBehavior={"inside"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart Item</DrawerHeader>

          <DrawerBody>
            {cartItem.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <Stack marginTop={"6"} align={"end"}>
              <Heading>
                Total{" "}
                {cartItem.reduce((total, item) => {
                  const prod = product.find((i) => i.id == item.id)
                  return total + (prod?.price || 0) * item.quantity
                }, 0)}
              </Heading>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              {" "}
              Cancel{" "}
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default CartDrawer
