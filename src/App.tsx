import "@fontsource/poppins"
import theme from "./theme"
import { Suspense, lazy } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import { CtxCartProvider } from "./context/ctxCart"
import { AuthProvider } from "./context/authCtx"

const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const Explore = lazy(() => import("./pages/Explore"))
const Register = lazy(() => import("./pages/Register"))
const Single = lazy(() => import("./pages/Single"))

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <CtxCartProvider>
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/explore" element={<Explore />}></Route>
              <Route path="/explore/:id" element={<Single />}></Route>
            </Routes>
          </Suspense>
        </CtxCartProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default App
