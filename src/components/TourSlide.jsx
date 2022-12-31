import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, EffectCoverflow, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import product from "../product.json"
import { Link } from "react-router-dom"
import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  VStack,
  Text,
} from "@chakra-ui/react"

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
      {product.map((item) => (
        <SwiperSlide key={item.id}>
          <Card borderRadius={"lg"} overflow="hidden">
            <Image
              objectFit={"cover"}
              h={["40", "52", "60"]}
              src={`./${item.image}`}
            />
            <CardBody bg={"white"}>
              <VStack spacing={"2"}>
                <Heading size={"md"}>{item.name}</Heading>
                <Text noOfLines={[1, 2]}>{item.description}</Text>
                <Button colorScheme={"green"}>More</Button>
              </VStack>
            </CardBody>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default TourSlide
