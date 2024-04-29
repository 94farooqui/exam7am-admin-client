import React from "react";
import { Hero } from "../components/Hero";
import HomeSectionsBar from "../components/HomeSectionsBar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { dashboard } from "../data/home-dashboard-data";
import DashboardCard from "../components/Cards/DashboardCard";

const Home = () => {
  return (
    <div className="w-full p-4 xl:p-0">
      <div className="max-w-[1200px] mx-auto py-4">
        <h3 className="text-slate-600 font-bold text-2xl">Dashboard</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {dashboard.map((data) => (
            <DashboardCard data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
