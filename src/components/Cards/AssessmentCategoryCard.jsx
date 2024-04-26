import React from "react";
import { Link } from "react-router-dom";
import driving from "./../../assets/car-icon.svg";

const AssessmentCategoryCard = ({ category }) => {
  return (
    <Link to={`${category.name}`}>
      <div className=" w-full border-2 relative bg-white drop-shadow-md rounded-lg flex flex-col gap-4 font-poppins overflow-clip pb-6">
        <img className=" right-4 w-120 h-48 object-cover z-0 opacity-80 border-b border-slate-400 bg-slate-300" src={category.image} />
        <h2 className="text-slate-600 text-xl font-bold line-clamp-1 ml-4">
          {category.title}
        </h2>
        <div className="flex flex-row gap-2 px-4 items-center">
          <p className="text-slate-500 line-clamp-2 pr-4 border-r border-slate-200">
            {category.description}
          </p>
          <div className="flex flex-col items-center">
          <p className="text-3xl font-semibold  text-whit text-slate-600 rounded-full inline px-8">
            {category.questions.length}
          </p>
          <p className="text-xs text-slate-500">Questions</p>
          </div>
          
        </div>
      </div>
    </Link>
  );
};

export default AssessmentCategoryCard;
