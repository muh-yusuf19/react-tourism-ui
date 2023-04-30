import { Dispatch, SetStateAction } from "react";

export interface User {
    token: string
    refreshToken: string
}

export interface Persist {
    remember: string | boolean
}

export type AuthContextType = {
    auth: User | null
    setAuth: Dispatch<SetStateAction<User>>
    persist: boolean | null
    setPersist: Dispatch<SetStateAction<boolean>>
};