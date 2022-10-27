import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMap, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return (
        <footer className="bg-emerald-600 text-white">
            <div className="max-w-full md:max-w-3xl lg:max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-justify">
                    <h1 className="font-bold text-xl tracking-wide mb-4">
                        LOGO
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid cupiditate rerum harum facilis? Doloremque
                        facilis odit beatae, vero unde hic eum illum corporis,
                        ipsum in nesciunt. Commodi at vel rem.
                    </p>
                    <div className="flex flex-row gap-4 mt-6">
                        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                        <FontAwesomeIcon icon={faFacebook} size="2xl" />
                        <FontAwesomeIcon icon={faInstagram} size="2xl" />
                        <FontAwesomeIcon icon={faTwitter} size="2xl" />
                    </div>
                </div>
                <div className="md:max-w-full md:mx-auto text-justify">
                    <h1 className="font-bold text-xl tracking-wide mb-4">
                        Links
                    </h1>
                    <ul className="list-none space-y-4 text-md">
                        <li>List one medium long</li>
                        <li>List one medium long</li>
                        <li>List one medium long</li>
                        <li>List one medium long</li>
                    </ul>
                </div>
                <div className="text-justify">
                    <h1 className="font-bold text-xl tracking-wide mb-4">
                        Reach Us
                    </h1>
                    <ul className="list-none space-y-6">
                        <li className="flex flex-row gap-4">
                            <FontAwesomeIcon icon={faMap} size="2xl" />
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Temporibus, ex?
                            </p>
                        </li>
                        <li className="flex flex-row gap-4">
                            <FontAwesomeIcon icon={faPhone} size="2xl" />
                            <p>(334) 336 3346</p>
                        </li>
                        <li className="flex flex-rwo gap-4">
                            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                            <p>Someemail@mail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
