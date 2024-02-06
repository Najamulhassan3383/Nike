import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen w-full dark:bg-[#000814]">
      <Outlet />
    </div>
  );
};

export default MainLayout;
