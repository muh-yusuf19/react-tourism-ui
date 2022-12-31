import {
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import { useState } from "react"
import BottomNav from "../components/BottomNav"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Register = () => {
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const handleSubmit = () => {
    setLoading((prev) => !prev)

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
      <section className="w-full bg-cover bg-[url('/background.jpg')]">
        <div className="flex flex-col">
          <Navbar />
          <div className="py-16 max-w-screen-xl m-auto flex flex-col md:flex-row">
            <Flex w={["full", "50%"]} mx={"auto"} align={"center"}>
              <Card
                bg={"white"}
                direction={["column", "row"]}
                borderRadius={"lg"}
                overflow="hidden"
                shadow={"lg"}
              >
                <Image
                  w={["100%", "35%"]}
                  objectFit={"cover"}
                  src={`./background.jpg`}
                />
                <CardBody>
                  <VStack spacing={"4"} align={"start"}>
                    <Heading pb={"4"} color={"gray.700"}>
                      Registration Form
                    </Heading>
                    <FormControl>
                      <FormLabel>First Name</FormLabel>
                      <Input w={"full"} type="text" name="firstName" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text" name="lastName" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input type="email" name="email" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Password</FormLabel>
                      <Input type="password" name="password" />
                    </FormControl>
                    {loading ? (
                      <Button
                        isLoading
                        loadingText="Submitting"
                        colorScheme={"teal"}
                      />
                    ) : (
                      <Button
                        onClick={() => handleSubmit()}
                        colorScheme={"teal"}
                      >
                        Submit
                      </Button>
                    )}
                  </VStack>
                </CardBody>
              </Card>
            </Flex>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </main>
  )
}

export default Register
