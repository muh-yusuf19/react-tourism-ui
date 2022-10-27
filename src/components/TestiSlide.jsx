import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"

import { Pagination, EffectCoverflow, Autoplay } from "swiper"

const TestiSlide = () => {
    return (
        <Swiper
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            effect={"coverflow"}
            grabCursor={true}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            modules={[Pagination, EffectCoverflow, Autoplay]}
            className="mySwiper"
            breakpoints={{
                300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: -30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: -20,
                },
            }}
        >
            <SwiperSlide>
                <figure className="flex flex-col rounded-xl overflow-hidden shadow-xl">
                    <figcaption className="h-52 md:h-40 lg:h-64 xl:h-72 overflow-auto px-4 py-2 bg-emerald-100">
                        <blockquote className="font-medium text-lg text-center text-emerald-600">
                            "Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Excepturi mollitia ipsam ipsum quibusdam fuga
                            quod tempora nam, esse commodi saepe assumenda
                            perferendis possimus atque molestias fugit unde
                            cumque. Dignissimos, magnam."Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Obcaecati
                            excepturi eveniet esse nihil nulla saepe maxime
                            dignissimos quasi unde, magnam animi amet adipisci
                            architecto possimus consequatur natus blanditiis
                            quos minima.
                        </blockquote>
                    </figcaption>
                    <div className="px-4 py-2 flex flex-row items-center gap-6 bg-emerald-600 overflow-hidden">
                        <img
                            className="w-20 h-20 rounded-full border-4 border-white object-cover object-center"
                            src="./person01.jpg"
                            alt="Testimoni photo"
                        />
                        <div>
                            <p className="font-medium text-white text-base">
                                Name of testimoni
                            </p>
                            <p className="font-light text-emerald-300 text-base">
                                Job of testimoni
                            </p>
                        </div>
                    </div>
                </figure>
            </SwiperSlide>
            <SwiperSlide>
                <figure className="flex flex-col rounded-xl overflow-hidden shadow-xl">
                    <figcaption className="h-52 md:h-40 lg:h-64 xl:h-72 px-4 py-2 bg-emerald-100">
                        <blockquote className="font-medium text-lg text-center text-emerald-600">
                            "Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Excepturi mollitia ipsam ipsum quibusdam fuga
                            quod tempora nam, esse commodi saepe assumenda
                            perferendis possimus atque molestias fugit unde
                            cumque. Dignissimos, magnam."
                        </blockquote>
                    </figcaption>
                    <div className="px-4 py-2 flex flex-row items-center gap-6 bg-emerald-600 overflow-hidden">
                        <img
                            className="w-20 h-20 rounded-full border-4 border-white object-cover object-center"
                            src="./person02.jpg"
                            alt="Testimoni photo"
                        />
                        <div>
                            <p className="font-medium text-white text-base">
                                Name of testimoni
                            </p>
                            <p className="font-light text-emerald-300 text-base">
                                Job of testimoni
                            </p>
                        </div>
                    </div>
                </figure>
            </SwiperSlide>
            <SwiperSlide>
                <figure className="flex flex-col rounded-xl overflow-hidden shadow-xl">
                    <figcaption className="h-52 md:h-40 lg:h-64 xl:h-72 px-4 py-2 bg-emerald-100">
                        <blockquote className="font-medium text-lg text-center text-emerald-600">
                            "Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Excepturi mollitia ipsam ipsum quibusdam fuga
                            quod tempora nam, esse commodi saepe assumenda
                            perferendis possimus atque molestias fugit unde
                            cumque. Dignissimos, magnam."
                        </blockquote>
                    </figcaption>
                    <div className="px-4 py-2 flex flex-row items-center gap-6 bg-emerald-600 overflow-hidden">
                        <img
                            className="w-20 h-20 rounded-full border-4 border-white object-cover object-center"
                            src="./person01.jpg"
                            alt="Testimoni photo"
                        />
                        <div>
                            <p className="font-medium text-white text-base">
                                Name of testimoni
                            </p>
                            <p className="font-light text-emerald-300 text-base">
                                Job of testimoni
                            </p>
                        </div>
                    </div>
                </figure>
            </SwiperSlide>
            <SwiperSlide>
                <figure className="flex flex-col rounded-xl overflow-hidden shadow-xl">
                    <figcaption className="h-52 md:h-40 lg:h-64 xl:h-72 px-4 py-2 bg-emerald-100">
                        <blockquote className="font-medium text-lg text-center text-emerald-600">
                            "Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Excepturi mollitia ipsam ipsum quibusdam fuga
                            quod tempora nam, esse commodi saepe assumenda
                            perferendis possimus atque molestias fugit unde
                            cumque. Dignissimos, magnam."
                        </blockquote>
                    </figcaption>
                    <div className="px-4 py-2 flex flex-row items-center gap-6 bg-emerald-600 overflow-hidden">
                        <img
                            className="w-20 h-20 rounded-full border-4 border-white object-cover object-center"
                            src="./person02.jpg"
                            alt="Testimoni photo"
                        />
                        <div>
                            <p className="font-medium text-white text-base">
                                Name of testimoni
                            </p>
                            <p className="font-light text-emerald-300 text-base">
                                Job of testimoni
                            </p>
                        </div>
                    </div>
                </figure>
            </SwiperSlide>
        </Swiper>
    )
}

export default TestiSlide
