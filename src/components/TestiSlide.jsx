import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import { Pagination, EffectCoverflow, Autoplay } from "swiper"
import { Card, CardBody, CardFooter, Text, Image, HStack, VStack, Heading } from "@chakra-ui/react"
import testimoni from "../testimoni.json"

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
      }}>
        {testimoni.map(item => (
          <SwiperSlide key={item.id}>
            <Card borderRadius={'xl'} overflow={'hidden'}>
              <CardBody bg={'green.300'}>
                <Text fontWeight={'medium'} height={['52', '40', '64', '72']} overflow={'auto'}>
                  {item.body}
                </Text>
              </CardBody>
              <CardFooter bg={'blackAlpha.100'}>
                <HStack>
                  <Image src={`./${item.image}`} objectFit={'cover'} width={'14'} height={'14'} borderRadius={'full'} border={'2'} borderColor={'white'} />
                  <VStack align={'start'}>
                    <Text fontWeight={'bold'}>{item.name}</Text>
                    <Text>Job of testimoni</Text>
                  </VStack>
                </HStack>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default TestiSlide
