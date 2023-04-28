import { HStack, VStack, Text, Flex, Show } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHouse,
  faUser,
  faHeart,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons"
import React from "react"

const BottomNav = () => {
  return (
    <Show below="lg">
      <Flex
        align="center"
        pos="relative"
        position={"fixed"}
        w="full"
        bottom="2"
        zIndex="sticky"
      >
        <HStack
          w={["90%", "75%", "60%"]}
          mx="auto"
          bg="green.50"
          p="3"
          borderRadius={"lg"}
          color={"green.400"}
          align={"center"}
          justify={"space-around"}
        >
          <VStack>
            <FontAwesomeIcon icon={faHouse} />
            <Text fontSize={"xs"} borderBottom="2px">
              Home
            </Text>
          </VStack>
          <VStack>
            <FontAwesomeIcon icon={faChartSimple} />
            <Text fontSize={"xs"}>Trending</Text>
          </VStack>
          <VStack>
            <FontAwesomeIcon icon={faHeart} />
            <Text fontSize={"xs"}>Wishlist</Text>
          </VStack>
          <VStack>
            <FontAwesomeIcon icon={faUser} />
            <Text fontSize={"xs"}>Profile</Text>
          </VStack>
        </HStack>
      </Flex>
    </Show>
  )
}

export default BottomNav
