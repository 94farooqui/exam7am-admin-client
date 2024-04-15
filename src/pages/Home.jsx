import React from "react";
import { Hero } from "../components/Hero";
import HomeSectionsBar from "../components/HomeSectionsBar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="">
      <div className="grid grid-cols-[256px_auto]">
        <Sidebar />
        <div className="w-full 1fr">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
