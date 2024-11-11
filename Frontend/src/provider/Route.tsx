import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Homepage from "../pages/Home/index"
import ErrorPage from "../pages/Error";
import Invoice from "../pages/Invoice";

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
                path: '/invoice',
                Component: Invoice,
            },
            {
                path:'*',
                Component: ErrorPage
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
