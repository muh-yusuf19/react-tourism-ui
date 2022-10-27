import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
    return (
        <div
            onBlur={() => setOpenNav(!openNav)}
            className={`w-full flex ${
                openNav ? "flex-col bg-white" : null
            } md:flex-row md:bg-transparent transition duration-300 max-w-screen-xl p-4 md:px-6 lg:px-8 mx-auto md:items-center md:justify-between`}
        >
            {/* Logo */}
            <div className="flex-1 flex flex-row items-center justify-between">
                <p className="text-gray-700 text-2xl font-bold px-4 py-2 tracking-wide text-bold focus:outline-none focus:border-2 focus:border-black">
                    <Link to="/">Logo Here</Link>
                </p>
                <button
                    onClick={() => setOpenNav(!openNav)}
                    className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
                >
                    <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="w-6 h-6"
                    >
                        {openNav ? (
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        ) : (
                            <path
                                // x-show="!open"
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        )}
                    </svg>
                </button>
            </div>

            {/* Tab and Desktop Nav */}
            <nav
                className={`${
                    openNav ? "flex" : "hidden"
                } px-4 md:flex flex-col md:flex-row text-gray-700 md:items-center md:justify-end`}
            >
                <Link
                    className="text-lg font-medium md:px-4 py-2 font-medium transition transfrom duration-150 md:mt-0 hover:-translate-y-2 focus:outline-none focus:text-emerald-600"
                    to="/"
                >
                    Home
                </Link>

                <Link
                    className="text-lg font-medium md:px-4 py-2 font-medium transition transfrom duration-150 md:mt-0 hover:-translate-y-2 focus:outline-none focus:text-emerald-600"
                    to="/explore"
                >
                    Explore
                </Link>

                <Link
                    className="text-lg font-medium md:px-4 py-2 font-medium transition transfrom duration-150 md:mt-0 hover:-translate-y-2 focus:outline-none focus:text-emerald-600"
                    to="/single"
                >
                    Single
                </Link>

                <Link
                    className="text-lg font-medium md:px-4 py-2 font-medium transition transfrom duration-150 md:mt-0 hover:-translate-y-2 focus:outline-none focus:text-emerald-600"
                    to="/login"
                >
                    Login
                </Link>

                <Link
                    className="text-lg font-medium md:px-4 py-2 font-medium transition transfrom duration-150 md:mt-0 hover:-translate-y-2 focus:outline-none focus:text-emerald-6"
                    to="/register"
                >
                    Register
                </Link>
            </nav>
        </div>
    )
}

export default Navbar
