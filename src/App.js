import React from "react";
import { readData, writeData } from "./api";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Admin from "./pages/Admin";
import { SnackbarProvider } from "notistack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/admin",
    element: <>

      <Header />
      <Admin />
    </>
  }
]);


export default function App() {

  React.useEffect(() => {
    readData("blog")


    // uploadFile()
  }, [])


  return (

    <RouterProvider router={router} />

  );
}




