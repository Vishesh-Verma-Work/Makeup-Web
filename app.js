import React from "react";
import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Landing from "./src/components/Landing";



const Main = ()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
};

const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Main/>,
      errorElement : <Error/>,
      children : [
          {
            path : "/",
            element : <Landing/>,
            errorElement : <Error/>
          }
      ]
    }
  ]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} future={{
  v7_startTransition: true,
  v7_relativeSplatPath: true,
  v7_fetcherPersist: true,
  v7_normalizeFormMethod: true,
  v7_partialHydration: true,
  v7_skipActionErrorRevalidation: true,
}} />);