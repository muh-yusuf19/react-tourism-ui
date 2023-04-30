import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Text,
  VStack,
  useToast,
  IconButton,
  Badge,
} from "@chakra-ui/react"
import {
  faPlus,
  faMinus,
  faStar,
  faShareNodes,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Suspense, lazy, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useCartContext } from "../context/ctxCart"
import product from "../data/product.json"
import { faHeart } from "@fortawesome/free-regular-svg-icons"

const Gallery = lazy(() => import("../components/Gallery"))
const Footer = lazy(() => import("../components/Footer"))
const BottomNav = lazy(() => import("../components/BottomNav"))

const Single = () => {
  const { id } = useParams()
  const { addToCart } = useCartContext()
  const [qyt, setQyt] = useState<number>(1)
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const currProduct = product.find((item) => item.id == Number(id))
  // const [currProduct, setCurrProduct] = useState<Product >(product.find((item) => item.id == Number(id)))

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
      addToCart(Number(currProduct?.id), qyt)
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
      <section className="w-full h-full bg-cover">
        <Navbar />
        <div className="flex flex-col py-16">
          <div className="max-w-full md:max-w-xl mx-auto">
            <div className="text-center w-full space-y-6">
              <Heading textAlign="center" color="gray.700" size="4xl">
                Tourism
              </Heading>
              <Text color="gray.700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident fuga ipsa, quisquam asperiores magni consectetur
                consequuntur hic.
              </Text>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl md:mx-auto text-gray-700">
        <Card
          h={["full", "380px", "450px", "500px"]}
          direction={["column", "row"]}
          shadow="lg"
        >
          <VStack w={["100%", "45%", "50%"]}>
            <Suspense fallback={<p>Loading...</p>}>
              <Gallery />
            </Suspense>
          </VStack>
          <CardBody overflow="auto">
            <VStack w="full" align={"start"} justify={"space-between"}>
              {/* Title review and badge */}
              <VStack spacing="2" pt="2" align="start">
                <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
                  {currProduct?.name}
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
                          i < Number(currProduct?.rating) ? "green.400" : "gray.300"
                        }
                      >
                        <FontAwesomeIcon icon={faStar} />
                      </Text>
                    ))}
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {currProduct?.reviewCount} reviews
                  </Box>
                </Box>
              </VStack>

              {/* Price quantity add */}
              <VStack w="full" spacing="2" pt="10" align="start">
                {/* Price */}
                <h1 className="text-xl font-bold tracking-wide">
                  Rp. {currProduct?.price}
                </h1>

                {/* quantity add */}
                <HStack gap={["2", "4"]} w="full">
                  {/* Quantity */}
                  <IconButton
                    aria-label="Decrease Btn"
                    size={"sm"}
                    onClick={() => handleDecrease()}
                    icon={<FontAwesomeIcon icon={faMinus} />}
                  />
                  <Text px="2">{qyt}</Text>
                  <IconButton
                    aria-label="Increase Btn"
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
                    aria-label="Like"
                    size="md"
                    icon={<FontAwesomeIcon icon={faHeart} />}
                  />
                  <IconButton
                    aria-label="Share"
                    size="md"
                    icon={<FontAwesomeIcon icon={faShareNodes} />}
                  />
                  <IconButton
                    aria-label="Location"
                    size="md"
                    icon={<FontAwesomeIcon icon={faMapLocationDot} />}
                  />
                </HStack>
              </VStack>

              {/* Description */}
              <VStack pt="10" align="start">
                <h1 className="font-bold text-xl tracking-wide">Description</h1>
                <Text align={"justify"} overflow="auto">
                  {currProduct?.description}
                </Text>
              </VStack>
            </VStack>
          </CardBody>
        </Card>
      </section>
      <Suspense fallback={<p>Loading...</p>}>
        <Footer />
        <BottomNav />
      </Suspense>
    </main>
  )
}

export default Single
