import React from "react";
import { Link } from "react-router-dom";
import driving from "./../../assets/car-icon.svg";

const AssessmentCategoryCard = ({ category }) => {
  return (
    <Link to={`${category._id}`}>
      <div className=" w-full border-2 relative border-slate-100  bg-white shadow-sm rounded-lg flex flex-row-reverse gap-4 items-center font-poppins p-4">
        <div className="flex flex-col gap-2  z-10">
          <h3 className="text-3xl font-semibold  text-whit text-slate-600 rounded-full inline">
            {category.questions.length}
          </h3>
          <h2 className="text-slate-600  font-bold line-clamp-1">{category.title}</h2>
          <p className="text-slate-500 text-xs line-clamp-2">
            {category.description}
          </p>
        </div>
          <img className=" right-4 w-20 z-0 opacity-80" src={category.image} />
      </div>
    </Link>
  );
};

export default AssessmentCategoryCard;
