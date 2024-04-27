import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllCategoriesOfModule } from "../apiHelper/modules.helper";
import ErrorPage from "../components/ErrorPage";
import AssessmentCategoryCard from "../components/Cards/AssessmentCategoryCard";
import { useHeader } from "../context/HeaderContext";

const ModulePage = () => {
  const params = useParams();
  //const [categoryList,setCategoryList] = useState()
  const { headerValue, setHeaderValue } = useHeader();

  const {
    data: receivedData,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["categories", params.module],
    queryFn: () => {
      return getAllCategoriesOfModule(params.module);
    },
  });

  useEffect(() => {
    if (receivedData) {
      setHeaderValue([...headerValue, receivedData.title]);
    }
    return()=>{
      setHeaderValue(headerValue)
    }
  }, [receivedData]);

  if (isLoading) return <p>Loading</p>;

  if (error) return <ErrorPage />;

  return (
    <div className="w-full">
      <div>
        <div className="w-full h-16 px-4 flex items-center justify-between border-t-2 border-slate-100 shadow-sm">
          <h1 className="text-xl font-bold text-slate-600">
            {receivedData.title}
          </h1>
          <Link to="new" className="p-2 border rounded-lg text-lg">
            Add New
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 p-8">
        {!receivedData.categories.length > 0 ? (
          <p>No Data Found</p>
        ) : (
          receivedData.categories.map((category) => (
            <AssessmentCategoryCard key={category._id} category={category} />
          ))
        )}
      </div>
    </div>
  );
};

export default ModulePage;
