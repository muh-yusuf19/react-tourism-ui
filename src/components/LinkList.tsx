import { Flex, Text } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"
import React from "react"

const LinkList = () => {
  const location = useLocation()

  return (
    <Flex
      direction={["column", "column", "row"]}
      gap={"6"}
      align={["start", "start", "center"]}
      justify={"space-between"}
    >
      <Link to="/">
        <Text
          fontWeight="medium"
          color={location.pathname == "/" ? "green.400" : "gray.700"}
        >
          Home
        </Text>
      </Link>

      <Link to="/explore">
        <Text
          fontWeight="medium"
          color={location.pathname == "/explore" ? "green.400" : "gray.700"}
        >
          Explore
        </Text>
      </Link>

      <Text fontWeight="medium" color="gray.700">
        About
      </Text>
    </Flex>
  )
}

export default LinkList
