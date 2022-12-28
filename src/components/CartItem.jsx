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
} from "@chakra-ui/react"
import product from "../product.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const CartItem = ({ id, quantity }) => {
  const item = product.find((item) => (item.id == id ? { ...item } : null))

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
        src={`./../${item.image}`}
        alt={`${item.name}`}
      />
      <CardBody>
        <SimpleGrid columns={2}>
          <VStack spacing={"2"} align={"start"} justify={"space-between"}>
            <Heading size={"md"}>{item.name}</Heading>
            <Heading size={"sm"}>Rp. {item.price}</Heading>
            <Text>Quantity: {quantity}</Text>
          </VStack>
          <VStack align={"end"} justify={"space-between"} h={"full"}>
            <IconButton
              colorScheme={"red"}
              size={"sm"}
              icon={<FontAwesomeIcon icon={faTrash} size="xs" />}
            />
            <Heading size={"sm"}>Rp. {item.price * quantity}</Heading>
          </VStack>
        </SimpleGrid>
      </CardBody>
    </Card>
  )
}

export default CartItem
