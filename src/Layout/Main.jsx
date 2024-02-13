import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
