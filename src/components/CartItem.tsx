import React from "react"
import {
  Card,
  Image,
  CardBody,
  VStack,
  Heading,
  Text,
  IconButton,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react"
import product from "../data/product.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { Cart } from "../@types/cart"
import { useCartContext } from "../context/ctxCart"

const CartItem = ({ id, quantity }: Cart) => {
  const item = product.find((item) => (item.id == id ? { ...item } : null))
  const toast = useToast()
  const { removeItem } = useCartContext()

  const handleDeleteCartItem = async () => {
    setTimeout(() => {
      removeItem(Number(item?.id))
      toast({
        title: "Remove Cart Item",
        description: "Item sucsessfully remove",
        status: "success",
        position: "bottom-right",
        duration: 5000,
        isClosable: true,
      })
    }, 500)
  } 

  return (
    <Card
      marginTop={"2"}
      direction={{ base: "column", sm: "row" }}
      borderRadius={"lg"}
      overflow="hidden"
    >
      <Image
        objectFit="cover"
        w={["100%", "100px"]}
        h={"40"}
        src={`./../${item?.image}`}
        alt={`${item?.name}`}
      />
      <CardBody>
        <SimpleGrid columns={2}>
          <VStack spacing={"2"} align={"start"} justify={"space-between"}>
            <Heading size={"md"}>{item?.name}</Heading>
            <Heading size={"sm"}>Rp. {item?.price}</Heading>
            <Text>Quantity: {quantity}</Text>
          </VStack>
          <VStack align={"end"} justify={"space-between"} h={"full"}>
            <IconButton
              onClick={handleDeleteCartItem}
              aria-label="Remove Cart"
              colorScheme={"red"}
              size={"sm"}
              icon={<FontAwesomeIcon icon={faTrash} size="xs" />}
            />
            <Heading size={"sm"}>Rp. {Number(item?.price) * quantity}</Heading>
          </VStack>
        </SimpleGrid>
      </CardBody>
    </Card>
  )
}

export default CartItem
