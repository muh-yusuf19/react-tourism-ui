import React from "react"
// import BottomNav from "../components/BottomNav"
// import Feature from "../components/Feature"
// import Footer from "../components/Footer"
// import Testimoni from "../components/Testimoni"
// import TourSlide from "../components/TourSlide"
import Navbar from "../components/Navbar"
import { VStack, Heading, Text, Button, Link } from "@chakra-ui/react"
import ImgBackground from "../images/background.jpg"
const Testimoni = React.lazy(() => import("../components/Testimoni"))
const Feature = React.lazy(() => import("../components/Feature"))
const TourSlide = React.lazy(() => import("../components/TourSlide"))
const BottomNav = React.lazy(() => import("../components/BottomNav"))
const Footer = React.lazy(() => import("../components/Footer"))

const Home = () => {
  return (
    <main>
      <section className="relative w-full h-full lg:h-screen">
        <img
          src={ImgBackground}
          alt="Background"
          width="700"
          height="465"
          className="object-cover w-full h-screen"
        />
        <div className="absolute inset-0 flex flex-col">
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
              <React.Suspense fallback={<p>Loading...</p>}>
                <TourSlide />
              </React.Suspense>
            </div>
          </div>
        </div>
      </section>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Feature />
        <Testimoni />
        <Footer />
        <BottomNav />
      </React.Suspense>
    </main>
  )
}

export default Home
