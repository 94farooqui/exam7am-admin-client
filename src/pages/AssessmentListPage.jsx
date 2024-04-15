import React, { useState } from "react";
import trafficSigns from "./../data/assessment/traffics-signs.json";
import safetySigns from "./../data/assessment/safety-signs.json";
import studyQuestions from "./../data/assessment/study-questions.json";
import AssessmentCategoryCard from "../components/Cards/AssessmentCategoryCard";
import NewAssessmentCategoryCard from "../components/Cards/NewAssessmentCategoryCard";
import { Outlet } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import ErrorPage from "../components/ErrorPage";
import axios from "axios";
import { getAllAssessment } from "../apiHelper/assessment.helper";

const AssessmentListPage = () => {
  const {
    data: allAssessments,
    isLoading,
    isPending,
    isFetching,
    error
  } = useQuery({ queryKey: ['assessments'], queryFn: getAllAssessment});

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <ErrorPage />;

  return (
    <div className="p-8 max-w-[1200px] mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <NewAssessmentCategoryCard />
        {allAssessments?.map((assessment) => (
          <AssessmentCategoryCard key={assessment._id} category={assessment} />
        ))}
        {/* <AssessmentCategoryCard category={trafficSigns} />
        <AssessmentCategoryCard category={safetySigns} />
        <AssessmentCategoryCard category={studyQuestions} />
        <AssessmentCategoryCard category={trafficSigns} />
        <AssessmentCategoryCard category={safetySigns} />
        <AssessmentCategoryCard category={studyQuestions} /> */}
      </div>
    </div>
  );
};

export default AssessmentListPage;
