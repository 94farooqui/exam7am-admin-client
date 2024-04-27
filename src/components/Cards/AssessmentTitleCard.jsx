import React from "react";

const AssessmentTitleCard = ({ assessment }) => {
  return (
    <div className="w-full flex justify-between bg-white rounded-lg overflow-hidden items-center shadow-md">
      <div className="w-[70%] flex flex-col gap-2  p-8 py-16 ">
        <h2 className="text-3xl font-semibold text-blue-800">
          {assessment.title}
        </h2>
        <p className="text-slate-600">{assessment.description}</p>
      </div>
      <div className="p-4">
        <img src={assessment.image} className="w-80" />
      </div>
    </div>
  );
};

export default AssessmentTitleCard;
