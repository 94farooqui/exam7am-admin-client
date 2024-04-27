import React, { useEffect, useState } from "react";

import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useHeader } from "../context/HeaderContext";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const { headerValue, setHeaderValue } = useHeader()
    useEffect(()=>{
      console.log(headerValue)
    },[])
  return (
    <div className="w-full bg-white">
      <div className="flex h-16 justify-between items-center px-4 py-4">
        <p className="text-gray-600 font-poppins">Page path - Need to be worked </p>
        <ul className="hidden sm:flex gap-4 text-gray-600">
          <Link to='/'><li>Signin</li></Link>
        </ul>
        <div className=" sm:hidden">
          <FaBars className="text-white text-xl" onClick={()=>setMenuOpen(!menuOpen)} />
          {menuOpen && <div>
            <ul className="absolute bg-slate-200 px-4 py-2 top-12 right-0 flex flex-col gap-2">
              <li>Home</li>
              <li>About</li>
              <li>Quiz</li>
              <li className="text-nowrap">Assessment</li>
              <li className="text-nowrap">Driving License</li>
            </ul>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Header;
