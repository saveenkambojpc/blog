import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className=" lg:px-32 mb-6 px-6 ">
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
