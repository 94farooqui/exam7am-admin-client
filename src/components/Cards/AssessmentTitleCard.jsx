import React from "react";

const AssessmentTitleCard = ({assessment}) => {
  return (
    <div className="w-full flex justify-between bg-sky-800 p-6  items-center shadow-md">
      <div className="w-[70%] flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-white">
          {assessment.title}
        </h2>
        <p className="text-slate-200">{assessment.description}</p>
      </div>
      <img src={assessment.image} className="w-64 rounded-lg" />
    </div>
  );
};

export default AssessmentTitleCard;
