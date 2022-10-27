import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Register = () => {
    return (
        <main className="font-raleway h-screen flex flex-col justify-between">
            <section>
                <Navbar />
            </section>
            <section className="px-6 md:px-0 py-16">
                <div className="rounded-xl flex flex-col md:flex-row max-w-2xl mx-auto shadow-xl">
                    <img
                        className="w-full md:w-1/3 rounded-t-xl md:rounded-tr-none md:rounded-l-xl object-cover object-center"
                        src="/background.jpg"
                        alt="Background Image"
                    />
                    <div className="w-full flex flex-col justify-center p-8">
                        <h1 className="text-2xl text-center mb-6 font-black text-emerald-600">
                            Registration Form
                        </h1>
                        <form action="">
                            <div className="flex flex-col mb-4">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    className="w-full rounded-md border border-emerald-300 py-2 px-4 outline-none"
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    className="w-full rounded-md border border-emerald-300 py-2 px-4 outline-none"
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="email">Email</label>
                                <input
                                    className="w-full rounded-md border border-emerald-300 py-2 px-4 outline-none"
                                    type="text"
                                    id="email"
                                    name="email"
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="password">Password</label>
                                <input
                                    className="w-full rounded-md border border-emerald-300 py-2 px-4 outline-none"
                                    type="text"
                                    id="password"
                                    name="password"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Register
