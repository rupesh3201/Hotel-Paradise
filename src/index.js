import ReactDom from "react-dom/client";
import React from "react";
import  { createBrowserRouter,RouterProvider}  from 'react-router-dom';
import Home from "./View/Home";
import About from "./View/About";
const root = ReactDom.createRoot(document.getElementById("root"));
const router =     createBrowserRouter([
  {
    path:'/',
    element:<Home/>

  },
  {
    path: 'About',
    element: <About/>
  }
])
root.render(<RouterProvider router = {router}/>);