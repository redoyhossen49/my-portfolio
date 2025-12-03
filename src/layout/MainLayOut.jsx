import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";

const MainLayOut = () => {
  return (
    <div className="cursor-none">
      <CustomCursor></CustomCursor>
      <NavBar></NavBar>
      <div
        className=" bg-gray-800  [background-image:linear-gradient(#333_1px,transparent_1px),linear-gradient(90deg,#333_1px,transparent_1px)] 
        [background-size:100px_100px] "
      >
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
