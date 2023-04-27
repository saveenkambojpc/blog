import React from "react";
import { theme } from "../misc/theme";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div style={{ background: theme.palette.colors.body }}>
      <Header />
      <div className=" lg:px-32 mb-6 px-6 ">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
