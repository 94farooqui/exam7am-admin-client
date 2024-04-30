import axios from "axios";
const serverURL = `${import.meta.env.VITE_SERVER_URL}/api/admin`

export const getAllAssessment = async () => {
  const response = await axios.get(`${serverURL}/assessments`);

  if (response.status === 200) {
    console.log("Requesting all assessments")
    //console.log(response.data)
    return response.data;
  }

  if (response.status === 401) {
    return response.error;
  }
};

export const getAssessmentDetails = async (module,category) => {
  console.log(module,category)
  console.log("Fetching assessment");
  const response = await axios.get(`${serverURL}/modules/${module}/categories/${category}`);

  if (response.status === 200) {
    //console.log(response.data);
    return response.data;
  }

  return response;
};

export const createNewAssessment = async (moduleName,assessment) => {
  console.log(assessment);
  const response = await axios.post(`${serverURL}/modules/${moduleName}/categories`, assessment)
  if (response.status === 200) {
    return true;
  } else return false;
};

export const createNewQuestion = async ( module,category,question) => {
  //console.log(id, question);
  const response = await axios.post(
    `${serverURL}/modules/${module}/categories/${category}/newQuestion`,
    question
  );
  if (response.status === 200) {
    return true;
  } else return false;
};


export const getQuestionDetails = async (assessmentId, questionId) => {
  const response = await axios.get(`${serverURL}/assessments/${assessmentId}/question/${questionId}`)
  //console.log(assessmentId, questionId)
  if(response){
    if(!response.status == 200){
      return error
    }
    else {
      //console.log(response.data)
      return response.data}
  }
 
}

export const updateQuestion = async ( {assessmentId,question,questionId} ) =>  {
  const response = await axios.put(`${serverURL}/assessments/${assessmentId}/question/${questionId}`, question)

}

export const deleteQuestion = async (assessmentId,questionId) => {
  console.log(assessmentId,questionId)
  const response = await axios.delete(`${serverURL}/assessments/${assessmentId}/question/${questionId}`)
  if(response.status == 200){
    return true
  }
}