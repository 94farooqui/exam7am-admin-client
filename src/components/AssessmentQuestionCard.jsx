import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";


const AssessmentQuestionCard = ({ question, index }) => {
  return (
    <div key={question._id} className="bg-white p-6 rounded-lg drop-shadow-md group relative">
      <h3 className="font-semibold text-xl text-slate-600 mb-2">
        {index + 1}) {question.question}
      </h3>
      <div className="flex flex-col gap-2 text-slate-500">
        {question.options.map((option) => (
          <p className="flex gap-2">
            <input
              type="checkbox"
              checked={question.correctAnswer == option.key}
            />
            {option.value}
          </p>
        ))}
      </div>
      <div className="absolute hidden group-hover:flex gap-4 p-2 bottom-0 right-0 bg-slate-200 text-slate-400 ">
        <Link to= {`edit/${question._id}`}><MdEdit className="hover:text-slate-600 hover:cursor-pointer"/></Link>
        <button><MdDelete  className="hover:text-slate-600 hover:cursor-pointer"/></button>
      </div>
    </div>
  );
};

export default AssessmentQuestionCard;
