import {
  Button,
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  VStack,
  Text,
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, EffectCoverflow, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import product from "../data/product.json"
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
                <Heading textAlign={"left"} size={"md"}>
                  {item.name}
                </Heading>
                <Box display="flex" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <Text
                        key={i}
                        color={i < item.rating ? "green.400" : "gray.300"}
                      >
                        <FontAwesomeIcon icon={faStar} />
                      </Text>
                    ))}
                  <Box pl="2" fontSize="xs">
                    {item.reviewCount} reviews
                  </Box>
                </Box>
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
