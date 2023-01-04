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
  Checkbox,
} from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BottomNav from "../components/BottomNav"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useAuth } from "../context/authCtx"

const Login = () => {
  const [loading, setLoading] = useState()

  // Chakra UI toast
  const toast = useToast()

  // React router
  const navigate = useNavigate()

  // Auth hook
  const { setAuth, persist, setPersist } = useAuth()

  // Toggle remember me
  const tooglePersist = () => {
    setPersist((prev) => !prev)
  }

  const handleSubmit = async () => {
    try {
      setLoading((prev) => !prev)

      setTimeout(() => {
        // Call API for login
        // Use auth hook to save auth information
        setAuth({
          email: "testuser@mail.com",
          accessToken: "SomeLongHashedToken",
        })
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
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        status: "error",
        position: "bottom-right",
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <main className="font-raleway">
      <section className="w-full h-full lg:h-screen bg-cover bg-[url('/background.jpg')]">
        <div className="h-full flex flex-col">
          <Navbar />
          <div className="w-full max-w-screen-xl m-auto flex flex-col md:flex-row">
            <Flex w={["full", "50%"]} mx={"auto"} align={"center"}>
              <Card
                bg={"white"}
                direction={{ base: "column", sm: "row" }}
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
                    <Heading color={"gray.700"}>Login Page</Heading>
                    <FormControl pt={"4"}>
                      <FormLabel>Email</FormLabel>
                      <Input type="email" />
                    </FormControl>
                    <FormControl pt={"4"}>
                      <FormLabel>Password</FormLabel>
                      <Input type="password" />
                    </FormControl>
                    <Checkbox onChange={() => tooglePersist()}>
                      Remember me?
                    </Checkbox>
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

export default Login
