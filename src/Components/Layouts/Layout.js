import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// internal components
import Header from "Components/Header";
import Divided from "Elements/Divided";

const Layout = () => {
  return (
    <>
      <Header />
      <Divided className="p-10 mx-auto max-w-7xl sm:px-6">
        <Outlet />
        <Toaster />
      </Divided>
    </>
  );
};

export default Layout;
