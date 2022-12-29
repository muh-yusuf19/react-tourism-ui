import {
  Button,
  Card,
  Flex,
  Image,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  CardBody,
  useToast,
} from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Login = () => {
  const [loading, setLoading] = useState()
  const toast = useToast()
  const navigate = useNavigate()

  const handleSubmit = () => {
    setLoading((prev) => !prev)

    setTimeout(() => {
      setLoading((prev) => !prev)
      toast({
        title: "Login Successfully",
        description: "Welcome back",
        status: "success",
        position: "bottom-right",
        duration: 5000,
        isClosable: true,
      })
      navigate("/")
    }, 5000)
  }

  return (
    <main className="font-raleway h-screen flex flex-col justify-between">
      <Navbar />
      <Flex w={["full", "50%"]} mx={"auto"} align={"center"} px={["6", "2"]}>
        <Card
          direction={{ base: "column", sm: "row" }}
          borderRadius={"lg"}
          overflow="hidden"
          my={["8", "16"]}
          shadow={"lg"}
        >
          <Image
            w={["100%", "35%"]}
            objectFit={"cover"}
            src={`./background.jpg`}
          />
          <CardBody>
            <VStack spacing={"4"} align={"start"}>
              <Heading color={"gray.700"}>Login Page</Heading>
              <FormControl pt={"4"}>
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl pt={"4"}>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              {loading ? (
                <Button
                  isLoading
                  loadingText="Submitting"
                  colorScheme={"teal"}
                />
              ) : (
                <Button onClick={() => handleSubmit()} colorScheme={"teal"}>
                  Submit
                </Button>
              )}
            </VStack>
          </CardBody>
        </Card>
      </Flex>
      <Footer />
    </main>
  )
}

export default Login
