import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { questions } from "./../data/quiz-questions/india-questions";
import QuizQuestionPage from "../components/Driving/Quiz/QuizQuestionPage";
const DrivingCountry = () => {
  const params = useParams();
//   console.log(params);
//   console.log("Driving country page");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentquestion, setCurrentQuestion] = useState(questions[currentIndex]);
  const [selectedAnswer,setSelectedAnswer] = useState(null)
  const [score,setScore] = useState(0)

  const onOptionSelect = (selectedoption)=>{
    console.log(selectedoption, currentquestion)
    setSelectedAnswer(selectedoption)  //received selected key
  }

  const onClickNext = () => {
    if(selectedAnswer === currentquestion.correctAnswer){
        console.log("Correct")
        setScore(score+1)
    }
    setCurrentIndex(currentIndex+1)
    setCurrentQuestion(questions[currentIndex+1])
  }

  return (
    <div className="w-full mac-w-[1200px]">
      <div className="w-[60%] mx-auto flex flex-col gap-4 ">
        <div className="flex flex-col gap-4  border border-slate-200 p-8">
          <QuizQuestionPage question={currentquestion} onOptionSelect={onOptionSelect} />
          <div className="flex justify-between">
            <h2 className="text-xl text-blue-800">Question: {currentIndex+1}/{questions.length}</h2>
            {currentIndex<questions.length-1 ? <button onClick={()=>onClickNext()} className="bg-slate-700 text-white text-xl px-8 rounded-lg py-2">Next</button> : <button className="bg-slate-700 text-white text-xl px-8 rounded-lg py-2">Submit</button>}
            <h2 className="text-xl text-blue-800">Score : {score}</h2>
          </div>
        </div>
        {/* {questions.map((question) => (
          <QuizQuestionPage question={question} />
        ))} */}
      </div>
    </div>
  );
};

export default DrivingCountry;
