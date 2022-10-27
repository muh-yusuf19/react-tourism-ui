import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"

import { Pagination, EffectCoverflow, Autoplay } from "swiper"

const TourSlide = () => {
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
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: -20,
                },
            }}
        >
            <SwiperSlide>
                <div className="flex flex-col bg-white rounded-lg shadow-lg">
                    <img
                        src="./slide01.jpg"
                        alt="Slide"
                        className="object-cover rounded-t-lg h-52 md:h-40 lg:h-64 xl:h-72"
                    />
                    <div className="p-4 space-y-4">
                        <h1 className="md:text-lg text-xl font-bold tracking-wide">
                            Name Tourism
                        </h1>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Soluta, tempore.
                        </p>
                        <button className="bg-gray-700 text-sm px-4 py-2 text-white rounded-md">
                            More
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col bg-white rounded-lg shadow-lg">
                    <img
                        src="./slide02.jpg"
                        alt="Slide"
                        className="object-cover rounded-t-lg h-52 md:h-40 lg:h-64 xl:h-72"
                    />
                    <div className="p-4 space-y-4">
                        <h1 className="md:text-lg text-xl font-bold tracking-wide">
                            Name Tourism
                        </h1>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Soluta, tempore.
                        </p>
                        <button className="bg-gray-700 text-sm px-4 py-2 text-white rounded-md">
                            More
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col bg-white rounded-lg shadow-lg">
                    <img
                        src="./slide03.jpg"
                        alt="Slide"
                        className="object-cover rounded-t-lg h-52 md:h-40 lg:h-64 xl:h-72"
                    />
                    <div className="p-4 space-y-4">
                        <h1 className="md:text-lg text-xl font-bold tracking-wide">
                            Name Tourism
                        </h1>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Soluta, tempore.
                        </p>
                        <button className="bg-gray-700 text-sm px-4 py-2 text-white rounded-md">
                            More
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col bg-white rounded-lg shadow-lg">
                    <img
                        src="./slide04.jpg"
                        alt="Slide"
                        className="object-cover rounded-t-lg h-52 md:h-40 lg:h-64 xl:h-72"
                    />
                    <div className="p-4 space-y-4">
                        <h1 className="md:text-lg text-xl font-bold tracking-wide">
                            Name Tourism
                        </h1>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Soluta, tempore.
                        </p>
                        <button className="bg-gray-700 text-sm px-4 py-2 text-white rounded-md">
                            More
                        </button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default TourSlide
