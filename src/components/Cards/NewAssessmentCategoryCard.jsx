import React from "react";
import { Link } from "react-router-dom";

const NewAssessmentCategoryCard = () => {
  return (
    <div className=" w-full border-2 border-slate-200 p-4 rounded-sm flex items-center justify-center font-poppins">
      <Link to='new'><h2 className="text-slate-600 text-6xl hover:cursor-pointer">+</h2></Link>
    </div>
  );
};

export default NewAssessmentCategoryCard;
