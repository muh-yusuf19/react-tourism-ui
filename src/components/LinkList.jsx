import { Flex, Text } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"
import React from "react"

const LinkList = () => {
  const location = useLocation()

  return (
    <Flex
      direction={["column", "row"]}
      gap={"6"}
      align={["start", "center"]}
      justify={"space-between"}
    >
      <Link
        to="/"
        className={`${
          location.pathname == "/" &&
          "text-emerald-600 border-b-2 border-emerald-600"
        } text-lg font-medium md:px-2 md:py-1 font-medium tracking-wide transition transfrom duration-450 md:mt-0 hover:-translate-y-2 focus:outline-none focus:text-emerald-600`}
      >
        Home
      </Link>

      <Link
        to="/explore"
        className={`${
          location.pathname == "/explore" &&
          `text-emerald-600 border-b-2 border-emerald-600`
        } text-lg font-medium md:px-2 md:py-1 font-medium tracking-wide transition transfrom duration-450 md:mt-0 hover:-translate-y-2 focus:outline-none focus:text-emerald-600`}
      >
        Explore
      </Link>
      <a
        href=""
        className="text-lg font-medium md:px-2 md:py-1 font-medium tracking-wide transition transfrom duration-450 md:mt-0 hover:-translate-y-2 focus:outline-none focus:text-emerald-600"
      >
        About
      </a>
    </Flex>
  )
}

export default LinkList
