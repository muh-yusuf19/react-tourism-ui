import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import product from "../product.json"

const Explore = () => {
    return (
        <main className="font-raleway">
            <section className="w-full h-full bg-cover bg-[url('/background.jpg')]">
                <Navbar />
                <div className="flex flex-col ">
                    <div className="max-w-full md:max-w-xl mx-auto">
                        <div className="text-center w-full space-y-6 py-4 md:py-6 px-6 lg:pl-14">
                            <h1 className="text-4xl lg:text-6xl xl:text-8xl text-white md:text-gray-700 font-bold tracking-wide">
                                Tourism
                            </h1>
                            <p className="text-sm md:text-base lg:text-lg text-white md:text-gray-700 text-justify">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Provident fuga ipsa, quisquam
                                asperiores magni consectetur consequuntur hic.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl md:mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {product.map(item => (
                        <div key={item.id} className="w-full relative rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={`./${item.image}`}
                                alt="Slide"
                                className="object-cover object-center md:h-[300px] lg:h-[430px]"
                                width="600"
                                height="800"
                            />
                            <div className="text-white absolute inset-x-0 bottom-0 p-4 space-y-4 text-center">
                                <h1 className="mb-4 md:text-2xl tracking-widest xl:text-3xl font-bold tracking-wide">
                                    {item.name}
                                </h1>
                                <Link to={`/explore/${item.id}`} className="bg-gray-700 text-sm px-4 py-2 text-white rounded-md">
                                    More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default Explore
