import React from "react";
import Logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";

import { RxDashboard } from "react-icons/rx";
import { TbDeviceDesktopQuestion } from "react-icons/tb";
import { MdOutlineSchool } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="sticky top-0 left-0 h-screen w-64 bg-[#1C2434] text-[#DEE4EE] flex flex-col">
      <div className="p-4">
        <div className="py-2 flex justify-center">
          <img src={Logo} className="w-32 sm:w-44" />
        </div>
        <h2 className="px-4 py-2 text-slate-400 text-[14px]">MENU</h2>
        <div className=" flex flex-col gap-2 text-[16px] ">
          <Link className="w-full py-2 px-4 hover:bg-[#333A48]" to="/">
            <div className="flex items-center gap-2">
              <RxDashboard className="text-[18px]" />
              <p>Dashboard</p>
            </div>
          </Link>
          <Link
            className="w-full py-2 px-4 hover:bg-[#333A48]"
            to="/assessment"
          >
            <div className="flex items-center gap-2">
              <TbDeviceDesktopQuestion className="text-[18px]" />
              <p>Technical Assessment</p>
            </div>
          </Link>
          <Link className="w-full py-2 px-4 hover:bg-[#333A48]" to="/school">
            <div className="flex items-center gap-2">
              <MdOutlineSchool className="text-[18px]" />
              <p>School Programs</p>
            </div>
          </Link>
          <Link className="w-full py-2 px-4 hover:bg-[#333A48]" to="/driving">
            <div className="flex items-center gap-2">
              <FaRegAddressCard className="text-[18px]" />
              <p>Driving Thoery</p>
            </div>
          </Link>
        </div>
        {/* Add your sidebar content here */}
      </div>
    </div>
  );
};

export default Sidebar;
