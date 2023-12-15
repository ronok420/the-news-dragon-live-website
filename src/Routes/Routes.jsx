import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Categories from "../Pages/Home/Category/Categories";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/Home/News/News";



const router =createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/category/:id",
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