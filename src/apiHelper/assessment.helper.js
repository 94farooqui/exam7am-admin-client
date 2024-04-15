import axios from "axios";
const serverURL = "https://exam7am-admin-2.onrender.com/";

export const getAllAssessment = async () => {
  const response = await axios.get(`${serverURL}/api/assessments`);

  if (response.status === 200) {
    //console.log(response.data)
    return response.data;
  }

  if (response.status === 401) {
    return response.error;
  }
};

export const getAssessmentDetails = async (id) => {
  console.log(id);
  console.log("Fetching assessment");
  const response = await axios.get(`${serverURL}/api/assessments/${id}`);

  if (response.status === 200) {
    console.log(response.data);
    return response.data;
  }

  return response;
};

export const createNewAssessment = async (assessment) => {
  console.log(assessment);
  const response = await axios.post(`${serverURL}/api/assessments`, assessment);

  if (response.status === 200) {
    return true;
  } else return false;
};

export const createNewQuestion = async ({ id, question }) => {
  console.log(id, question);
  const response = await axios.post(
    `${serverURL}/api/assessments/${id}`,
    question
  );
  if (response.status === 201) {
    return true;
  } else return false;
};
