import { ReactNode, createContext, useContext, useState } from "react"
import { AuthContextType, User } from "../@types/auth"

const AuthContext = createContext<AuthContextType>({auth: null, setAuth: () => {}, persist: null, setPersist: () => {}})

type AuthProviderProps = {
  children: ReactNode
}

export function useAuth() {
  return useContext(AuthContext)
}

const getInitialPersist = () => {
  const initPersist = localStorage.getItem('persist')
  return initPersist ? JSON.parse(initPersist) : false
}

export const AuthProvider = ({ children }: AuthProviderProps) =>  {
  const [auth, setAuth] = useState<User>({token: '', refreshToken: ''})
  const [persist, setPersist] = useState(getInitialPersist)
  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
