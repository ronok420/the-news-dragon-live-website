import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Categories from "../Pages/Home/Category/Categories";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/Home/News/News";
import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";



const router =createBrowserRouter([
    {
        path:"/",
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:"/",
                element:<Navigate to="/category/0"></Navigate>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
        ]

    },
    {
        path:"/category",
        element:<Main></Main>,
        children:[
            // {
            //     path:"/",
            //     element:<Home></Home>
            // },
            {
                path:":id",
                element:<Categories></Categories>,
               loader: ({params}) => fetch(`http://localhost:7000/categories/${params.id}`)
            },
        ]
    },
    {
        path:"/news",
        element:<NewsLayout></NewsLayout>,
        children:[
            {
             path:':id',
             element:<News></News>,
             loader:({params}) => fetch(`http://localhost:7000/news/${params.id}`)
            },
           
        ]
    }
])
export default router;