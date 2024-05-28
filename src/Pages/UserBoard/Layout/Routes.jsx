import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Home/Home/Home";
import Roots from "../Roots/Roots";
import AllProduct from "../AllProduct/AllProduct";
import AddProduct from "../AddProduct/AddProduct";
import MyProduct from "../MyProduct/MyProduct";
import Login from "../Login/Login";
import Register from "../Register/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/allProduct',
            element: <AllProduct/>,
        },
        {
            path: '/addProduct',
            element: <AddProduct/>,
        },
        {
            path: '/myProduct',
            element: <MyProduct/>,
        },
        {
            path: '/login',
            element: <Login/>,
        },
        {
            path: '/register',
            element: <Register/>,
        },
      ]
    },
  ]);

  export default router;