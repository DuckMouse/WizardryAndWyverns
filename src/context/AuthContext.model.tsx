import { User, UserCredential } from "firebase/auth"

export interface IAuthContext {
    user: User | null
    createUser: (email: string, password: string) => Promise<UserCredential>
    signInUser: (email: string, password: string) => Promise<UserCredential>
    googleSignIn: () => void
    forgotPassword: (email: string) => Promise<void>
    logOut: () => void
}