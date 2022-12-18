import React from "react"
import Feature from "../components/Feature"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Testimoni from "../components/Testimoni"
import TourSlide from "../components/TourSlide"

const Home = () => {
    return (
        <main className="font-raleway">
            <section className="w-full h-full lg:h-screen lg:relative bg-cover bg-[url('/background.jpg')]">
                <div className="lg:absolute lg:inset-0 lg:flex lg:flex-col">
                    <Navbar />
                    <div className="grid grid-cols-1 lg:my-auto">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-full md:w-1/2 space-y-6 py-4 md:py-6 px-6 lg:pl-14">
                                <h1 className="text-4xl lg:text-6xl xl:text-8xl 2xl:text-9xl text-gray-700 md:text-white font-bold tracking-wide">
                                    Petung Kriyono
                                </h1>
                                <p className="text-sm md:text-base lg:text-lg text-gray-700 md:text-white text-justify">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Provident fuga ipsa,
                                    quisquam asperiores magni consectetur
                                    consequuntur hic
                                </p>
                                <button className="bg-white text-lg px-4 py-2 text-gray-700 rounded-md">
                                    Explore
                                </button>
                            </div>

                            <div className="w-full md:w-1/2 py-4 md:py-6">
                                <TourSlide />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Feature />
            <Testimoni />
            <Footer />
        </main>
    )
}

export default Home
