import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
  useToast,
  IconButton,
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Navbar from "../components/Navbar"
import { useCartContext } from "../context/ctxCart"
import product from "../product.json"
import BottomNav from "../components/BottomNav"

const Single = () => {
  const { id } = useParams()
  const { addToCart } = useCartContext()
  const [qyt, setQyt] = useState(1)
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const currProduct = product.find((item) => item.id == id)

  const handleIncrease = () => {
    setQyt((prev) => prev + 1)
  }

  const handleDecrease = () => {
    if (qyt <= 1) {
      setQyt(1)
    } else {
      setQyt((prev) => prev - 1)
    }
  }

  const handleAdd = () => {
    setLoading((prev) => !prev)
    setTimeout(() => {
      addToCart(currProduct.id, qyt)
      toast({
        title: "Add to Cart",
        description: "Item sucsessfully added",
        status: "success",
        position: "bottom-right",
        duration: 5000,
        isClosable: true,
      })
      setLoading((prev) => !prev)
    }, 5000)
  }

  return (
    <main className="font-raleway">
      <section className="w-full h-full bg-cover bg-[url('/background.jpg')]">
        <Navbar />
        <div className="flex flex-col py-16">
          <div className="max-w-full md:max-w-xl mx-auto">
            <div className="text-center w-full space-y-6">
              <h1 className="text-4xl lg:text-6xl xl:text-8xl text-white md:text-gray-700 font-bold tracking-wide">
                Tourism
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-white md:text-gray-700 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident fuga ipsa, quisquam asperiores magni consectetur
                consequuntur hic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl md:mx-auto text-gray-700">
        <Card shadow={"lg"} overflow="auto">
          <CardBody>
            <Flex
              gap={"6"}
              h={["400px", "450px", "600px"]}
              direction={["column", "row"]}
            >
              <VStack w={["100%", "50%"]}>
                <Gallery />
              </VStack>
              <VStack align={"start"} spacing={"6"} justify={"space-between"}>
                <Heading>{currProduct.name}</Heading>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap="4"
                  h={"50%"}
                  overflow="auto"
                >
                  <Heading size={"md"}>Description</Heading>
                  <Text align={"justify"}>{currProduct.description}</Text>
                </Box>
                <Heading size={"md"}>Rp. {currProduct.price}</Heading>
                <HStack>
                  <IconButton
                    onClick={() => handleDecrease()}
                    icon={<FontAwesomeIcon icon={faMinus} />}
                  />
                  <p className="px-6 text-xl text-gray-600">{qyt}</p>
                  <IconButton
                    onClick={() => handleIncrease()}
                    icon={<FontAwesomeIcon icon={faPlus} />}
                  />
                </HStack>
                {loading ? (
                  <Button
                    size={"lg"}
                    isLoading
                    loadingText="Submitting"
                    colorScheme={"teal"}
                  />
                ) : (
                  <Button
                    size={"lg"}
                    onClick={() => handleAdd()}
                    colorScheme={"teal"}
                  >
                    Add to cart
                  </Button>
                )}
              </VStack>
            </Flex>
          </CardBody>
        </Card>
      </section>

      <Footer />
      <BottomNav />
    </main>
  )
}

export default Single
