import { useState } from "react"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Navbar from "../components/Navbar"

const Single = () => {
    const [jumlah, setJumlah] = useState(0)

    const increment = () => {
        if (jumlah >= 0) {
            setJumlah(jumlah + 1)
        }
    }

    const decrement = () => {
        if (jumlah <= 0) {
            setJumlah(0)
        } else {
            setJumlah(jumlah - 1)
        }
    }

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

            <section className="py-16 px-4 md:px-6 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl md:mx-auto text-gray-700">
                <div className="shadow-2xl rounded-md px-4 py-4 lg:py-6">
                    <h1 className="text-gray-700 text-4xl font-bold">
                        Some Long Tourism Title
                    </h1>
                    <div className="mt-6 md:h-[400px] lg:h-[450px] xl:h-[600px] flex flex-col md:flex-row gap-10">
                        <div className="w-full md:w-1/2 flex flex-col">
                            <Gallery />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-between">
                            <h2 className="font-bold text-xl">Description</h2>
                            <p className="mt-4 h-[400px] md:h-auto overflow-auto">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Explicabo unde ratione non cum
                                eveniet voluptates voluptate iste rerum, tempora
                                earum eligendi modi hic consectetur vitae nobis
                                possimus quae quaerat facere. Lorem ipsum dolor
                                sit amet consectetur adipisicing elit. Autem
                                modi dolorum dolores perspiciatis at rem cum
                                impedit debitis iusto iure incidunt quaerat enim
                                assumenda voluptates ipsa est, culpa qui non.
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Sit cum magni nihil libero
                                voluptas nemo doloremque blanditiis, possimus,
                                aperiam dolorum eos qui voluptatibus incidunt?
                                Doloribus quia hic numquam cum placeat! Lorem
                                ipsum dolor sit amet consectetur adipisicing
                                elit. Dignissimos odit suscipit, aspernatur
                                nostrum a perspiciatis magnam, harum quas
                                placeat doloribus vel magni soluta ex
                                accusantium recusandae sit incidunt cupiditate
                                in.
                            </p>
                            <div className="mt-4">
                                <label htmlFor="jumlah" className="font-bold">
                                    Jumlah
                                </label>
                                <div className="my-4 flex flex-row h-10 w-1/2 rounded-lg relative bg-transparent mt-1">
                                    <button
                                        onClick={decrement}
                                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                                    >
                                        <span className="m-auto text-2xl font-thin">
                                            −
                                        </span>
                                    </button>
                                    <input
                                        onChange={(e) =>
                                            setJumlah(e.target.value)
                                        }
                                        value={jumlah}
                                        id="jumlah"
                                        type="number"
                                        className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                                        name="custom-input-number"
                                    ></input>
                                    <button
                                        onClick={increment}
                                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                                    >
                                        <span className="m-auto text-2xl font-thin">
                                            +
                                        </span>
                                    </button>
                                </div>
                                <button className="px-4 py-2 bg-emerald-600 text-white font-medium focus:outline-none">
                                    Add to Chart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default Single
