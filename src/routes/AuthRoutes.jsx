import { SignIn, Register, ForgotPassword } from '../components/auth';

export const authRoutes = [
    { path: "/signin", name: "Sign in", element: <SignIn />, isMenu: false, isAuthenticated: false },
    { path: "/register", name: "Register", element: <Register />, isMenu: false, isAuthenticated: false },
    { path: "/passwordreset", name: "Forgot Password", element: <ForgotPassword />, isMenu: false, isAuthenticated: false },

]