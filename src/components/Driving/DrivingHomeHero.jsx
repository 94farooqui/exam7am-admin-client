import React from "react";
import DrivingHeroImage from "./../../assets/Driving/driving-hero-image.png";
import { FaCheck } from "react-icons/fa"

const DrivingHomeHero = () => {
  return (
    <div className="w-full flex justify-between items-center font-poppins">
      <div className="w-[70%]">
        <div className="flex flex-col gap-4 text-slate-700 font-bold">
          <h2 className="text-2xl">Pass Your Exam In First Attempt</h2>
          <h2 className="text-4xl">Breeze Through Your 2024 Theory Test</h2>
          <hr/>
          <div className="flex gap-8 font-normal">
            <ul className="flex flex-col gap-1">
              <li>
                <span className="text-green-500 text-xl"><FaCheck className="mr-2 inline"/></span>
                Up-to-date traffic rules
              </li>
              <li>
                <span className="text-green-500 text-xl"><FaCheck className="mr-2 inline"/></span>
                Learn the traffic signs.
              </li>
              <li>
                <span className="text-green-500 text-xl"><FaCheck className="mr-2 inline"/></span>
                Preparation theory exam.
              </li>
              <li>
                <span className="text-green-500 text-xl"><FaCheck className="mr-2 inline"/></span>
                Road safety videos.
              </li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li>
                <span className="text-green-500 text-xl"><FaCheck className="mr-2 inline"/></span>
                Take the practice tests
              </li>
              <li>
                <span className="text-green-500 text-xl"><FaCheck className="mr-2 inline"/></span>
                Get your driving license.
              </li>
              <li>
                <span className="text-green-500 text-xl"><FaCheck className="mr-2 inline"/></span>
                Open-source development.
              </li>
              <li>
                <span className="text-green-500 text-xl"><FaCheck className="mr-2 inline"/></span>
                Multiple countries.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <img src={DrivingHeroImage} />
    </div>
  );
};

export default DrivingHomeHero;
