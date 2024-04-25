import React, { useEffect } from "react";
import Logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";

import { RxDashboard } from "react-icons/rx";
import { TbDeviceDesktopQuestion } from "react-icons/tb";
import { MdOutlineSchool } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";
import SidebarData from "./../../data/sidebar.data.json";
import { useQuery } from "@tanstack/react-query";
import { getAllModules } from "../../apiHelper/modules.helper";

const Sidebar = () => {
  const {data:modules, isLoading,error,refetch} = useQuery({queryKey:["moduleList"],queryFn:getAllModules})

  useEffect(()=>{
    refetch()
  },[])
  if(isLoading) return <p>Loading</p>

  if(error) return null

  return (
    <div className="sticky top-0 left-0 h-screen w-64 bg-[#1C2434] text-[#DEE4EE] flex flex-col">
      <div className="p-4">
        <div className="py-2 flex justify-center">
          <img src={Logo} className="w-32 sm:w-44" />
        </div>
        <h2 className="px-4 py-2 text-slate-400 text-[14px]">MENU</h2>
        <div className=" flex flex-col gap-2 text-[16px] ">
          {modules.map((module) => (
            <Link key={module._id} className="w-full py-2 px-4 hover:bg-[#333A48]" to={`/${module.name}`}>
              <div className="flex items-center gap-2">
                <RxDashboard className="text-[18px]" />
                <p>{module.title}</p>
              </div>
            </Link>
          ))}
          <Link to='/module/new'>Add New</Link>
        </div>
        {/* Add your sidebar content here */}
      </div>
    </div>
  );
};

export default Sidebar;
