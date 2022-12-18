import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, EffectCoverflow, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import product from "../product.json"
import { Link } from "react-router-dom"

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
            {product.map(item => (
                <SwiperSlide key={item.id}>
                    <div className="lg:w-[280px] flex flex-col bg-white rounded-lg shadow-lg">
                        <img
                            src={`./${item.image}`}
                            alt="Slide"
                            className="object-cover rounded-t-lg h-52 md:h-40 lg:h-64 xl:h-72"
                        />
                        <div className="p-4 space-y-4">
                            <h1 className="text-base font-bold tracking-wide">
                                {item.name}
                            </h1>
                            <p className="text-sm truncate overflow-hidden h-12">
                                {item.description}
                            </p>
                            <Link to={`/explore/${item.id}`} className="bg-gray-700 text-sm px-4 py-2 text-white rounded-md">
                                More
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default TourSlide
