import { createBrowserRouter } from "react-router-dom"
import Main from "../../../Layout/Main"
import Home from "../../Home/Home/Home"
import Login from "../../Login/Login";
import SignUp from "../../SignUp/SignUp";
import SeeDetails from "../../SeeDetails/SeeDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/seeDetails/:id',
                element: <SeeDetails></SeeDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/posts/${params.id}`)
            }
        ]
    }
])

export default router;