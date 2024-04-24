import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAssessmentDetails } from "../apiHelper/assessment.helper";
import ErrorPage from "../components/ErrorPage";
import AssessmentTitleCard from "../components/Cards/AssessmentTitleCard";
import AssessmentQuestionCard from "../components/AssessmentQuestionCard";

const AssessmentDetails = () => {
  const params = useParams();

  const {
    data: assessment,
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ["assessment", params.id],
    queryFn: () => {
      return getAssessmentDetails(params.id);
    },
  });

  if (isLoading) return <p>Loading</p>;

  if (error) return <ErrorPage />;

  useEffect(()=>{
    refetch()
  },[])
  return (
    <div className="max-w-[1200px] mx-auto font-poppins">
      <div className="flex flex-col gap-8 py-8">
        <AssessmentTitleCard assessment={assessment} />
        <div className="w-full flex justify-between items-center border-b-2 border-slate-300 pb-2">
          <h2 className="text-xl font-semibold text-sky-700">Questions</h2>
          <Link to='newQuestion' className="bg-slate-600 rounded-md p-2 text-sm text-white" >Add Question</Link>
        </div>
        {assessment.questions.map((question,index) => <AssessmentQuestionCard refetch={refetch} assessmentId={params.id} question={question} key={index} index={index} />)}
      </div>
    </div>
  );
};

export default AssessmentDetails;
