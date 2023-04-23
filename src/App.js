import React from "react";
import { writeData } from "./api";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <div>admin</div>
  }
]);


export default function App() {

  React.useEffect(() => {
    writeData('blog', 123, { name: "Heropanti" })
  }, [])


  return (
    <>
      <Header />
      <div className=" lg:px-32 mb-6 px-6 ">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
}


{/* <div>
<Header />
<div className=" lg:px-32 mb-6 px-6 ">

  <Home />
</div>

<Footer />
</div> */}

