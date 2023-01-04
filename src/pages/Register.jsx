import {
  Button,
  Box,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Heading,
  Hide,
  Image,
  Input,
  useToast,
  VStack,
  FormErrorMessage,
} from "@chakra-ui/react"
import React from "react"
import { useState } from "react"
import BottomNav from "../components/BottomNav"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const registerSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
})

const Register = () => {
  const [loading, setLoading] = useState(false)

  // Chakra UI toast
  const toast = useToast()

  // React-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  })

  // handleSubmit
  const onSubmit = (data) => {
    setLoading((prev) => !prev)
    console.log(data)
    setTimeout(() => {
      setLoading((prev) => !prev)
      toast({
        title: "Registration Successfully",
        description: "We've created your account for you.",
        status: "success",
        position: "bottom-right",
        duration: 5000,
        isClosable: true,
      })
    }, 5000)
  }

  return (
    <main className="font-raleway">
      <section className="w-full lg:h-full md:h-screen bg-cover bg-[url('/background.jpg')]">
        <div className="h-full flex flex-col">
          <Navbar />
          <div className="py-8 md:py-0 lg:py-6 w-10/12 md:w-2/3 m-auto">
            <Box w="full">
              <Card
                bg={"white"}
                direction={["column", "row"]}
                borderRadius={"lg"}
                overflow="hidden"
                shadow={"lg"}
              >
                <Hide below="sm">
                  <Image
                    w={["100%", "35%"]}
                    objectFit={"cover"}
                    src={`./background.jpg`}
                  />
                </Hide>
                <CardBody>
                  <VStack spacing={"4"} align={"start"}>
                    <Heading color={"gray.700"}>Registration Form</Heading>
                    <form className="w-full space-y-4">
                      <FormControl isInvalid={!!errors?.firstName?.message}>
                        <FormLabel>First Name</FormLabel>
                        <Input
                          {...register("firstName")}
                          w={"full"}
                          type="text"
                          name="firstName"
                        />
                        <FormErrorMessage>
                          {errors?.firstName?.message}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={!!errors?.lastName?.message}>
                        <FormLabel>Last Name</FormLabel>
                        <Input
                          {...register("lastName")}
                          type="text"
                          name="lastName"
                        />
                        <FormErrorMessage>
                          {errors?.lastName?.message}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={!!errors?.email?.message}>
                        <FormLabel>Email</FormLabel>
                        <Input
                          {...register("email")}
                          type="email"
                          name="email"
                        />
                        <FormErrorMessage>
                          {errors?.email?.message}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={!!errors?.password?.message}>
                        <FormLabel>Password</FormLabel>
                        <Input
                          {...register("password")}
                          type="password"
                          name="password"
                        />
                        <FormErrorMessage>
                          {errors?.password?.message}
                        </FormErrorMessage>
                      </FormControl>
                      {loading ? (
                        <Button
                          isLoading
                          loadingText="Submitting"
                          colorScheme={"green"}
                        />
                      ) : (
                        <Button
                          onClick={handleSubmit(onSubmit)}
                          colorScheme={"green"}
                        >
                          Submit
                        </Button>
                      )}
                    </form>
                  </VStack>
                </CardBody>
              </Card>
            </Box>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  )
}

export default Register
