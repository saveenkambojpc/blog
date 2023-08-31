import React, { useCallback, useEffect } from "react";
import { dbCollectionRef, readData, writeData } from "./api";
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
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Unauth from "./pages/Unauth";
import Profile from "./pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { set_is_loading } from "./redux/features/helper";
import { onValue } from "firebase/database";
import { set_blogs_obj } from "./redux/features/blogs";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import { setFeedbackObj } from "./redux/features/admin";

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
    path: "/signup",
    element: <>
      <Signup />
    </>
  },
  {
    path: "/login",
    element:
      <>
        <Login />
      </>
  },
  {
    path: "/add_blog",
    element:
      <PrivateRoute>
        <AddBlog />

      </PrivateRoute>
  },
  {
    path: "/unauth",
    element: <Unauth />,
  },
  {
    path: "*",
    element: <Unauth />,
  },
  {
    path: "/profile",
    element: <>
      <PrivateRoute>

        <Profile />

        <Footer />
      </PrivateRoute>
    </>
  },

  {
    path: "/contact",
    element:
      <Layout>

        <Contact />
      </Layout>
  },

  {
    path: "/admin",
    element: <PrivateRoute>
      <Admin />
    </PrivateRoute>

  },


]);


export default function App() {

  const dispatch = useDispatch();
  const blogsState = useSelector((store) => store.blogs);
  const helperState = useSelector((store) => store.helper);

  React.useEffect(() => {

    readData("blog")


    // uploadFile()
  }, [])

  const fetchBlogs = useCallback(() => {
    dispatch(set_is_loading(true));
    onValue(dbCollectionRef("blogs"), (snapshot) => {
      dispatch(set_is_loading(false));
      if (snapshot.val()) {
        const data = snapshot.val();
        dispatch(set_blogs_obj(data));
      }
    });
  }, [dispatch]);

  const fetchFeedback = useCallback(() => {
    dispatch(set_is_loading(true));
    onValue(dbCollectionRef("contact"), (snapshot) => {
      dispatch(set_is_loading(false));
      if (snapshot.val()) {
        const data = snapshot.val();
        dispatch(setFeedbackObj(data));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  useEffect(() => {
    fetchFeedback()
  }, [fetchFeedback]);


  return (

    <RouterProvider router={router} />

  );
}




