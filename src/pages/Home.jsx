import { Button, Flex } from "@chakra-ui/react"
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
    <main className="font-raleway">
      <section className="w-full h-full lg:h-screen bg-cover bg-[url('/background.jpg')]">
        <div className="h-full flex flex-col">
          <Navbar />
          <div className="w-full max-w-screen-xl md:m-auto flex flex-col md:flex-row gap-6">
            <div className="px-4 md:px-6 lg:px-10 w-full md:w-1/2 space-y-6 py-8 md:py-6">
              <h1 className="text-center md:text-left text-6xl xl:text-8xl 2xl:text-9xl text-white font-bold tracking-wide">
                Petung Kriyono
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-white text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident fuga ipsa, quisquam asperiores magni consectetur
                consequuntur hic
              </p>

              <Button colorScheme={"whiteAlpha"} size={"lg"}>
                <Link to="/explore">Explore</Link>
              </Button>
            </div>

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
