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
      <section className="w-full h-full md:h-screen bg-cover bg-[url('/background.jpg')]">
        <div className="h-full flex flex-col">
          <Navbar />
          <div className="py-8 md:py-0 w-10/12 md:w-2/3 m-auto">
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
                        colorScheme={"green"}
                      />
                    ) : (
                      <Button
                        onClick={() => handleSubmit()}
                        colorScheme={"green"}
                      >
                        Submit
                      </Button>
                    )}
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
