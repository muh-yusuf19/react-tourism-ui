import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import product from "../data/product.json"
import BottomNav from "../components/BottomNav"
import {
  Button,
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

const Explore = () => {
  return (
    <main>
      <section className="w-full h-full bg-cover bg-[url('/background.jpg')]">
        <Navbar />
        <div className="flex flex-col py-16">
          <div className="max-w-md px-8 md:px-0 md:max-w-xl mx-auto">
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

      <section className="py-16 px-6 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl md:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.map((item) => (
            <Card
              key={item.id}
              shadow={"lg"}
              borderRadius={["lg", "xl"]}
              overflow="hidden"
            >
              <Image
                objectFit={"cover"}
                h={["60", "52", "72"]}
                src={`./${item.image}`}
              />
              <CardBody bg={"white"}>
                <VStack spacing={"2"}>
                  <Heading textAlign={"left"} size={"md"}>
                    {item.name}
                  </Heading>
                  <Box display="flex" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <Text
                          key={i}
                          color={i < item.rating ? "green.400" : "gray.300"}
                        >
                          <FontAwesomeIcon icon={faStar} />
                        </Text>
                      ))}
                    <Box pl="2" fontSize="xs">
                      {item.reviewCount} reviews
                    </Box>
                  </Box>
                  <Link to={`/explore/${item.id}`}>
                    <Button size={["sm", "md"]} colorScheme={"green"}>
                      More
                    </Button>
                  </Link>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  )
}

export default Explore
