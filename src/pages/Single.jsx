import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Text,
  VStack,
  useToast,
  IconButton,
  Badge,
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlus,
  faMinus,
  faStar,
  faShareNodes,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Navbar from "../components/Navbar"
import { useCartContext } from "../context/ctxCart"
import product from "../data/product.json"
import BottomNav from "../components/BottomNav"
import { faHeart } from "@fortawesome/free-regular-svg-icons"

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
    <main className="font-poppins">
      <section className="w-full h-full bg-cover bg-[url('/background.jpg')]">
        <Navbar />
        <div className="flex flex-col">
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
        <Card
          h={["full", "380px", "450px", "500px"]}
          direction={["column", "row"]}
        >
          <VStack w={["100%", "45%", "50%"]}>
            <Gallery />
          </VStack>
          <CardBody overflow="auto">
            <VStack w="full" align={"start"} justify={"space-between"}>
              {/* Title review and badge */}
              <VStack spacing="2" pt="2" align="start">
                <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
                  {currProduct.name}
                </h1>
                {/* Badge */}
                <Box display="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="green">
                    In Stock
                  </Badge>
                  <Badge borderRadius="full" px="2" colorScheme="blackAlpha">
                    TCK-002
                  </Badge>
                </Box>

                {/* Review */}
                <Box display="flex" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <Text
                        key={i}
                        color={
                          i < currProduct.rating ? "green.400" : "gray.300"
                        }
                      >
                        <FontAwesomeIcon icon={faStar} />
                      </Text>
                    ))}
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {currProduct.reviewCount} reviews
                  </Box>
                </Box>
              </VStack>

              {/* Price quantity add */}
              <VStack w="full" spacing="2" pt="10" align="start">
                {/* Price */}
                <h1 className="text-xl font-bold tracking-wide">
                  Rp. {currProduct.price}
                </h1>

                {/* quantity add */}
                <HStack gap={["2", "4"]} w="full">
                  {/* Quantity */}
                  <IconButton
                    size={"sm"}
                    onClick={() => handleDecrease()}
                    icon={<FontAwesomeIcon icon={faMinus} />}
                  />
                  <Text px="2">{qyt}</Text>
                  <IconButton
                    size={"sm"}
                    onClick={() => handleIncrease()}
                    icon={<FontAwesomeIcon icon={faPlus} />}
                  />

                  {/* Add to cart */}
                  {loading ? (
                    <Button
                      w="full"
                      isLoading
                      loadingText="Submitting"
                      colorScheme={"teal"}
                    />
                  ) : (
                    <Button
                      w="full"
                      onClick={() => handleAdd()}
                      colorScheme={"teal"}
                    >
                      Add to cart
                    </Button>
                  )}
                </HStack>
                <HStack>
                  <IconButton
                    size="md"
                    icon={<FontAwesomeIcon icon={faHeart} />}
                  />
                  <IconButton
                    size="md"
                    icon={<FontAwesomeIcon icon={faShareNodes} />}
                  />
                  <IconButton
                    size="md"
                    icon={<FontAwesomeIcon icon={faMapLocationDot} />}
                  />
                </HStack>
              </VStack>

              {/* Description */}
              <VStack pt="10" align="start">
                <h1 className="font-bold text-xl tracking-wide">Description</h1>
                <Text align={"justify"} overflow="auto">
                  {currProduct.description}
                </Text>
              </VStack>
            </VStack>
          </CardBody>
        </Card>
      </section>

      <Footer />
      <BottomNav />
    </main>
  )
}

export default Single
