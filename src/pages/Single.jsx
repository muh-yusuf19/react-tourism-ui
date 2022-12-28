import { useState } from "react"
import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Navbar from "../components/Navbar"
import { useCartContext } from "../context/ctxCart"
import product from "../product.json"

const Single = () => {
  const { id } = useParams()
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreseItemQuantity,
    addToCart,
    cartItem,
  } = useCartContext()
  const [qyt, setQyt] = useState(1)

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

  const currProduct = product.find((item) => item.id == id)
  const handleAdd = () => {
    addToCart(currProduct.id, qyt)
  }
  // const quantity = getItemQuantity(currProduct.id)

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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident fuga ipsa, quisquam asperiores magni consectetur
                consequuntur hic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl md:mx-auto text-gray-700">
        <div className="shadow-2xl rounded-md px-4 py-4 lg:py-6">
          <div className="mt-6 md:h-[400px] lg:h-[450px] xl:h-[600px] flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2 flex flex-col">
              <Gallery />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4 justify-between">
              <h1 className="text-gray-700 md:text-2xl text-4xl font-bold">
                {" "}
                {currProduct.name}{" "}
              </h1>
              <div className="overflow-auto">
                <h2 className="font-bold text-xl">Description</h2>
                <p className="mt-4">{currProduct.description}</p>
              </div>
              <div className="mt-4">
                <p className="font-bold">Rp. {currProduct.price}</p>
              </div>
              <div className="mt-4">
                <div className="my-4 flex flex-row h-10 w-1/2 items-center rounded-lg relative bg-transparent mt-1">
                  <button
                    onClick={() => handleDecrease()}
                    className="text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full px-4 rounded-l cursor-pointer outline-none"
                  >
                    <span className="m-auto text-2xl font-thin"> − </span>
                  </button>
                  <p className="px-6 text-xl text-gray-600">{qyt}</p>
                  <button
                    onClick={() => handleIncrease()}
                    className="text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full px-4 rounded-r cursor-pointer"
                  >
                    <span className="m-auto text-2xl font-thin"> + </span>
                  </button>
                </div>
                <button
                  onClick={() => handleAdd()}
                  className="px-4 py-2 bg-emerald-600 text-white font-medium rounded-md focus:outline-none hover:-translate-y-2 transition duration-300"
                >
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
