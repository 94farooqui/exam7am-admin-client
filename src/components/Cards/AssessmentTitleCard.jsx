import React from "react";

const AssessmentTitleCard = ({ assessment }) => {
  return (
    <div>

    {/* visible for devices beyond -lg- break point */}
    <div className="hidden lg:flex w-full flex-col-reverse lg:flex-row justify-between bg-yellow-300 rounded-lg overflow-hidden items-center shadow-md">
      <div className="w-full lg:w-[70%] flex flex-col gap-2  lg:p-8 lg:py-16 ">
        <h2 className="text-xl lg:text-3xl font-semibold text-blue-800">
          {assessment.title}
        </h2>
        <p className="text-slate-600">{assessment.description}</p>
      </div>
      <div className="lg:p-4">
        <img src={assessment.image} className="w-80 h-60 object-contain" />
      </div>
    </div>



    {/* visible for mobile devices */}
    <div className="lg:hidden w-full flex flex-col-reverse justify-between bg-green-300 rounded-lg overflow-hidden items-center shadow-md">
      <div className="w-full flex flex-col gap-2 p-2">
        <h2 className="text-xl font-semibold text-blue-800">
          {assessment.title}
        </h2>
        <p className="text-slate-600">{assessment.description}</p>
      </div>
      <div className="lg:p-4">
        <img src={assessment.image} className="w-80 h-60 object-cover" />
      </div>
    </div>
    </div>
  );
};

export default AssessmentTitleCard;
