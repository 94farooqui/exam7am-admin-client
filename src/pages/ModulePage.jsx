import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllCategoriesOfModule } from "../apiHelper/modules.helper";
import ErrorPage from "../components/ErrorPage";

const ModulePage = () => {
  const params = useParams();
  //const [categoryList,setCategoryList] = useState()
  

  const {data:receivedData,isLoading,error, refetch} = useQuery({queryKey:["categories",params.module], queryFn: () => {return getAllCategoriesOfModule(params.module)}})
  
  if(isLoading) return <p>Loading</p>

  if(error) return <ErrorPage/>
  
  return (
    <div className="w-full">
      <div>
        <div className="w-full flex items-center justify-between bg-white p-4 border-t-2 border-slate-100 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-600">{receivedData.title}</h1>
          <button className="p-2 border rounded-lg text-lg">Add New</button>
        </div>
      </div>
      {!receivedData.categories.length >0 ? <p>No Data Found</p> :receivedData.categories.map(category => <h1>{category.title}</h1>)}
    </div>
  );
};

export default ModulePage;
