import "@fontsource/poppins"

import { ChakraProvider } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import { CtxCartProvider } from "./context/ctxCart"
import Explore from "./pages/Explore"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Single from "./pages/Single"
import theme from "./theme"
import { AuthProvider } from "./context/authCtx"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <CtxCartProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
            <Route path="/explore/:id" element={<Single />}></Route>
          </Routes>
        </CtxCartProvider>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default App
