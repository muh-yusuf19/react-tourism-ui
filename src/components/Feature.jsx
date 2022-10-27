import {
    faCameraRetro,
    faHotel,
    faShop,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Feature = () => {
    return (
        <section className="py-16 px-6 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl md:mx-auto">
            <h1 className="mb-6 font-black text-4xl text-emerald-500 text-center tracking-wide">
                Our Feature
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex flex-col items-center p-6 rounded-lg shadow-lg">
                    <FontAwesomeIcon
                        icon={faCameraRetro}
                        className="w-20 h-20 text-emerald-500 py-4"
                    />

                    <p className="text-justify text-gray-700">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Suscipit minus, saepe obcaecati quaerat deserunt
                        soluta?
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 rounded-lg shadow-lg">
                    <FontAwesomeIcon
                        icon={faHotel}
                        className="w-20 h-20 text-emerald-500 py-4"
                    />
                    <p className="text-justify text-gray-700">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Suscipit minus, saepe obcaecati quaerat deserunt
                        soluta?
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 rounded-lg shadow-lg">
                    <FontAwesomeIcon
                        icon={faShop}
                        className="w-20 h-20 text-emerald-500 py-4"
                    />

                    <p className="text-justify text-gray-700">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Suscipit minus, saepe obcaecati quaerat deserunt
                        soluta?
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Feature
