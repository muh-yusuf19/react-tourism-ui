import { Button, Heading, Text, VStack } from "@chakra-ui/react"
import React from "react"
import { Link, useLocation } from "react-router-dom"
import BottomNav from "../components/BottomNav"
import Feature from "../components/Feature"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Testimoni from "../components/Testimoni"
import TourSlide from "../components/TourSlide"

const Home = () => {
  const location = useLocation()

  return (
    <main>
      <section className="w-full h-full lg:h-screen bg-cover bg-[url('/background.jpg')]">
        <div className="h-full flex flex-col">
          <Navbar />
          <div className="w-full max-w-screen-xl md:m-auto flex flex-col md:flex-row gap-6">
            <VStack
              gap="6"
              w="full"
              px={["4", "6", "8"]}
              py={["8", "12"]}
              align={["center", "start"]}
            >
              <Heading textAlign={["center", "left"]} color="white" size="4xl">
                Petung Kriyono
              </Heading>
              <Text textAlign={["center", "left"]} color="white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                ipsa, tenetur dicta suscipit totam assumenda maiores aut.
                Architecto, laudantium vitae?
              </Text>

              <Button colorScheme={"whiteAlpha"} size={"lg"}>
                <Link to="/explore">Explore</Link>
              </Button>
            </VStack>

            <div className="z-0 w-full md:w-1/2 py-4 md:py-6">
              <TourSlide />
            </div>
          </div>
        </div>
      </section>
      <Feature />
      <Testimoni />
      <Footer />
      <BottomNav />
    </main>
  )
}

export default Home
