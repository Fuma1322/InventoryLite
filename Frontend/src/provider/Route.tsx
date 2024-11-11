import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Homepage from "../pages/Home/index"

export const Routes = createBrowserRouter ([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '/',
                Component: Homepage,
            },
            {
                path: '/about',
                Component: About,
            }
        ]
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/register',
        Component: Register
    }
])
