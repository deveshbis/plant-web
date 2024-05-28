import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Home/Home/Home";
import Roots from "../Roots/Roots";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children: [
        {
            path: '/',
            element: <Home></Home>

        }
      ]
    },
  ]);

  export default router;