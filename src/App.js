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
import { SnackbarProvider } from "notistack";
import Blogs from "./pages/Blogs";
import BlogPage from "./pages/BlogPage";
import AddBlog from "./pages/AddBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/blogs",
    element: <Layout><Blogs /></Layout>,
  },
  {
    path: "/blogs/:id",
    element: <Layout><BlogPage /></Layout>,
  },
  {
    path: "/add_blog",
    element: <>

      <Header />
      <AddBlog />
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




