import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "../swiper.css"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import { FreeMode, Navigation, Thumbs } from "swiper"

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img
            className="w-full object-cover object-center"
            src="/slide01.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-cover object-center"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-cover object-center"
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="customSwiper"
      >
        <SwiperSlide>
          <img
            className="w-full object-cover object-center"
            src="/slide01.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-cover object-center"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-cover object-center"
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Gallery
