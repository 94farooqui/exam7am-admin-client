import React, { useEffect, useRef, useState } from "react";

import { FaBars } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useHeader } from "../context/HeaderContext";
import { FaRegCircleUser } from "react-icons/fa6";
import { getAllModules } from "../apiHelper/modules.helper";
import { useQuery } from "@tanstack/react-query";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate()
  const menuRef = useRef(null)
  const {
    data: modules,
    isLoading,
    error,
    refetch,
  } = useQuery({ queryKey: ["moduleList"], queryFn: getAllModules });

  const [menuOpen, setMenuOpen] = useState(false);
  const { headerValue, setHeaderValue } = useHeader();
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  const handleMenuItemClick = (path) => {
    navigate(path)
    setMenuOpen(false)
  }

  if(isLoading) return <p>Loading</p>

  if(error) return <p>Error</p>

  return (
    <div className="w-full bg-white">
      <div className="flex h-16 justify-between items-center px-4 py-4">
        <p className="hidden lg:block text-gray-600 font-poppins">
          Page path - Need to be worked{" "}
        </p>
        <p className="lg:hidden text-gray-600 font-poppins">Exam7am </p>
        <ul className="hidden lg:flex gap-4 text-gray-600">
          <Link to="/">
            <li>
              <FaRegCircleUser />
            </li>
          </Link>
        </ul>
        <div className=" lg:hidden">
          <FaBars
            className="text-slate-600 text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && (
            <div ref={menuRef} className="bg-slate-200 ease-in-out duration-300">
              <ul className=" z-20 w-[70%] absolute overflow-auto bg-slate-200 py-4 top-16 right-0 flex flex-col text-lg text-slate-800 ">
              <li className="text-2xl self-end"><button onClick={()=>setMenuOpen(false)}><IoClose /></button></li>
              <NavLink className='px-4 ' to='/'><li >Home</li></NavLink>
                {modules.map(module => <li className="text-nowrap  border-slate-300 border-t-2 p-2"><button onClick={()=>handleMenuItemClick(module.name)} className='p-2 ' >{module.title}</button></li>)}
                {/* <li>Home</li>
                <li>About</li>
                <li>Quiz</li>
                <li className="text-nowrap">Assessment</li>
                <li className="text-nowrap">Driving License</li> */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
