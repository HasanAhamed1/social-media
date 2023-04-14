import { createBrowserRouter } from "react-router-dom"
import Main from "../../../Layout/Main"
import Home from "../../Home/Home/Home"
import Login from "../../Login/Login";
import SignUp from "../../SignUp/SignUp";
import SeeDetails from "../../SeeDetails/SeeDetails";
import Media from "../../Media/Media";
import About from "../../About/About";
import Abouts from "../../About/Abouts";
import Update from "../../Update/Update";
import Message from "../../Message/Message";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element: <PrivateRoute><SeeDetails></SeeDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/posts/${params.id}`)
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: '/about',
                element: <Abouts></Abouts>
            },
            {
                path: '/about/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`http://localhost:5000/about/${params.id}`)
            },
            {
                path: '/message',
                element: <Message></Message>
            }
        ]
    }
])

export default router;