import React, { useState } from "react";

const QuizQuestionPage = ({ question, onOptionSelect }) => {
  const [selectedKey, setSelectedKey] = useState(null);

  const onSelect = (option) => {
    
    setSelectedKey(option.key)
    onOptionSelect(option.key)
  };

 console.log(question); /// Receiving error here, incorrect response
  return (
    <div className="w-full p-4 flex flex-col gap-4 ">
      <h2 className="text-xl">{question.q}</h2>
      <div className="w-full flex flex-row-reverse ">
        {question.image && (
          <div className="w-[30%]">
            <img className="mx-auto object-contain" src={question.image} />
          </div>
        )}
        <ul className="w-full flex flex-col gap-2">
          {question.options.map((option) => (
            <li
            key={option.key}
              onClick={() => onSelect(option) }
              className={`bg-slate-100 py-2 pl-4 border hover:bg-slate-200 rounded-md hover:cursor-pointer ${option.key == selectedKey ? "border-2 border-slate-400" : ""} `}
            >
              {option.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizQuestionPage;
