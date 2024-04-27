import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAssessmentDetails } from "../apiHelper/assessment.helper";
import ErrorPage from "../components/ErrorPage";
import AssessmentTitleCard from "../components/Cards/AssessmentTitleCard";
import AssessmentQuestionCard from "../components/AssessmentQuestionCard";
import { useHeader } from "../context/HeaderContext";

const AssessmentDetails = () => {
  const params = useParams();
  const { headerValue, setHeaderValue } = useHeader();

  const {
    data: assessment,
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ["assessment", params.id],
    queryFn: () => {
      return getAssessmentDetails(params.module, params.category);
    },
  });

  useEffect(() => {
    refetch();
    console.log(assessment);
    if (assessment) {
      setHeaderValue(`${headerValue} > ${assessment.title}`);
    }
  }, [assessment]);

  if (isLoading) return <p>Loading</p>;

  if (error) return <ErrorPage />;

  return (
    <div className="max-w-[1200px] mx-auto font-poppins">
      <div className="flex flex-col gap-8 py-8">
        <AssessmentTitleCard assessment={assessment} />
        <div className="w-full flex justify-between items-center border-b-2 border-slate-300 pb-2">
          <h2 className="text-xl font-semibold text-sky-700">Questions</h2>
          <div className="flex gap-2">
            <Link
              to="newQuestion"
              className="bg-slate-600 rounded-md p-2 text-sm text-white"
            >
              Add Question
            </Link>
            <button onClick={()=>{refetch()}} className="bg-slate-700 rounded-md p-2 text-sm text-white">Refresh</button>
          </div>
        </div>
        {assessment.questions.map((question, index) => (
          <AssessmentQuestionCard
            refetch={refetch}
            assessmentId={params.id}
            question={question}
            key={index}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default AssessmentDetails;
