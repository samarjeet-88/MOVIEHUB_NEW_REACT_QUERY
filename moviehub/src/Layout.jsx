import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import App from "./App";

function Layout() {
  return (
    <>
      <div className="w-full min-h-screen bg-[linear-gradient(to_top_right,#b73615_0%,#2b2a2a_20%,#3a3333_30%,#1a1a1a_60%,#2b2a2a_80%)]">
        <App />
        <div className="w-[90%] m-auto">
            <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
