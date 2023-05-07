import {
  Button,
  Box,
  Card,
  Image,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  CardBody,
  useToast,
  Checkbox,
  Hide,
  FormErrorMessage,
} from "@chakra-ui/react"
import { Suspense, lazy, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useAuth } from "../context/authCtx"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import ImgBackground from "../images/background.jpg"

const Footer = lazy(() => import("../components/Footer"))
const BottomNav = lazy(() => import("../components/BottomNav"))

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

type UserLoginForm = {
  email: string
  password: string
}

const Login = () => {
  const [loading, setLoading] = useState<boolean>()
  const toast = useToast()
  const navigate = useNavigate()
  const { setAuth, setPersist } = useAuth()

  // React-hook-form
  const {
    handleSubmit,
    register,
    formState: { errors, isLoading },
  } = useForm<UserLoginForm>({
    resolver: zodResolver(LoginSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // Toggle remember me
  const tooglePersist = () => {
    setPersist((prev) => !prev)
  }

  // handleSubmit
  const onSubmit = async (data: UserLoginForm) => {
    try {
      setLoading((prev) => !prev)

      setTimeout(() => {
        // Call API for login
        // Use auth hook to save auth information
        setAuth({
          token: data.email,
          refreshToken: data.password,
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
    <main>
      <section className="w-full h-full md:h-screen bg-cover">
        <div className="h-full flex flex-col">
          <Navbar />
          <div className="py-8 md:py-0 w-10/12 md:w-2/3 m-auto">
            <Box w="full">
              <Card
                bg={"white"}
                direction={{ base: "column", sm: "row" }}
                borderRadius={"lg"}
                overflow="hidden"
                shadow={"lg"}
              >
                <Hide below="sm">
                  <Image
                    w={["100%", "35%"]}
                    objectFit={"cover"}
                    src={ImgBackground}
                  />
                </Hide>
                <CardBody>
                  <VStack spacing={"4"} align={"start"}>
                    <Heading color={"gray.700"}>Login Page</Heading>
                    <form className="w-full space-y-4">
                      <FormControl isInvalid={!!errors?.email?.message}>
                        <FormLabel>Email</FormLabel>
                        <Input {...register("email")} type="email" />
                        <FormErrorMessage>
                          {errors?.email?.message}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={!!errors?.password?.message}>
                        <FormLabel>Password</FormLabel>
                        <Input {...register("password")} type="password" />
                        <FormErrorMessage>
                          {errors?.password?.message}
                        </FormErrorMessage>
                      </FormControl>
                      <VStack align="flex-start" gap={4}>
                        <Checkbox onChange={() => tooglePersist()}>
                          Remember me?
                        </Checkbox>
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
                      </VStack>
                    </form>
                  </VStack>
                </CardBody>
              </Card>
            </Box>
          </div>
        </div>
      </section>
      <Suspense fallback={<p>Loading...</p>}>
        <Footer />
        <BottomNav />
      </Suspense>
    </main>
  )
}

export default Login
