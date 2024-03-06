import { About, Contact, Home } from '../pages';

export const pageRoutes = [
    { path: "/", name: "Home", element: <Home />, isMenu: true, isAuthenticated: false },
    { path: "/about", name: "About", element: <About />, isMenu: true, isAuthenticated: false },
    { path: "/contact", name: "Contact", element: <Contact />, isMenu: true, isAuthenticated: false },
]