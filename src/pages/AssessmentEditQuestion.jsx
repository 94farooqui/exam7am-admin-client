import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createNewQuestion, getQuestionDetails, updateQuestion } from "../apiHelper/assessment.helper";
import { useQuery } from "@tanstack/react-query";

const initialValues = {
  question: null,
  options: [],
  image: null,
  correctAnswer: null,
};

const AssessmentEditQuestion = () => {
  const params = useParams();
  const assessmentId = params.id
  const questionId = params.qid

  const [formData,setFormData] = useState(initialValues)

  const {
    data: questionData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["question", params.qid],
    queryFn: () => {
      return getQuestionDetails(assessmentId, questionId);
    },
  });

  useEffect(()=>{
    
    if(questionData){
      console.log("Received",questionData)
      setFormData({
        question: questionData.question,
        //options: [...questionData.options],
        options: [],
        image : questionData.image,
        correctAnswer : questionData.correctAnswer
      })
      setOption1(questionData.options[0].value)
      setOption2(questionData.options[1].value)
      setOption3(questionData.options[2].value)
      setOption4(questionData.options[3].value)

    }
  },[questionData])

  const formRef = useRef(null)
  const navigate = useNavigate()
  //const [newQuestion, setNewQuestion] = useState(question);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [file, setFile] = useState(null);

  const [option1, setOption1] = useState();
  const [option2, setOption2] = useState();

  const [option3, setOption3] = useState();
  const [option4, setOption4] = useState();

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onOptionChnge = (e) => {
    const newOption = { option: e.target.name, value: e.target.value };
    setNewQuestion({
      ...newQuestion,
      options: [...newQuestion.options, newOption],
    });
  };

  const onFileChange = (e) => {
    console.log("File have been selected", e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleUpload = (selected, event) => {
    event.preventDefault();
    console.log("File upload started");
    const storage = getStorage(app);
    const fileName = new Date().getTime() + selected.name;
    const storageRef = ref(storage, `Assessments/images/${fileName}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("File state changed");
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadPercentage(Math.round(progress));
      },

      (error) => {
        setNewError("Error in upload");
      },

      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setNewCategory({ ...newCategory, image: downloadURL })
        );
      }
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const optinosValueArray = [option1, option2,option3,option4]
    const optionsKeyArray = ["one", "two" , "three" , "four"]
    //setFormData({...formData, options : []})
    for(let i=0; i<optinosValueArray.length; i++){
      // newQuestion.options.push({(i+1) = optinosValueArray[i]})
      let obj = {}
      obj["key"] = optionsKeyArray[i]
      obj["value"] = optinosValueArray[i];
      setFormData({...formData, options : formData.options.push(obj)})
      // setNewQuestion({...newQuestion, options:newQuestion.options.push(obj) })
    }
    const questionAdded = updateQuestion({ assessmentId: assessmentId, question: formData, questionId: questionId });  //sending data to helper function
    if(questionAdded){
      setFormData(initialValues)
      formRef.current.reset()
      navigate(-1)
    }
  };

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <ErrorPage />;

  return (
    <div className="max-w-[1200px] mx-auto py-8">
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-slate-600">Add Question</h2>
        <form
        ref={formRef}
          onSubmit={(e) => handleFormSubmit(e)}
          className="flex flex-col gap-4 bg-white p-8 rounded-md"
        >
          <div className="flex flex-col gap-1">
            <label className="text-xl font-semibold text-slate-600">
              Question
            </label>
            <textarea
              name="question"
              defaultValue={questionData.question}
              onChange={(e) => onInputChange(e)}
              className="p-2 resize-none border border-slate-300 rounded-md"
              rows={3}
              placeholder="Add a new question"
            />
          </div>

          {formData.image && <img src={formData.image} />}

          <div className="flex flex-col gap-1">
            <label>Image</label>
            <div className="p-2 border rounded-md flex justify-between items-center">
              <input
                type="file"
                onChange={(e) => onFileChange(e)}
                placeholder="Eg: Marketing"
              />
              <div className="flex flex-row-reverse gap-2 items-center">
                <button
                  onClick={(e) => handleUpload(file, e)}
                  className="bg-[#0E416D] text-white text-sm p-2 rounded-md self-center"
                >
                  Upload
                </button>
                {uploadPercentage > 0 && <p>{uploadPercentage}%</p>}
              </div>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-slate-600 mt-2">Options</h2>
          <div className="flex gap-2 items-center">
            <label>Option 01</label>
            <input
              type="text"
              name="one"
              defaultValue={questionData.options[0].value}
              onChange={(e) => setOption1(e.target.value)}
              className="flex-1 border border-slate-200 p-2 rounded-md"
              placeholder="Enter option text"
            />
          </div>
          <div className="flex gap-2 items-center">
            <label>Option 02</label>
            <input
              type="text"
              name="two"
              defaultValue={questionData.options[1].value}
              onChange={(e) => setOption2(e.target.value)}
              className="flex-1 border border-slate-200 p-2 rounded-md"
              placeholder="Enter option text"
            />
          </div>
          <div className="flex gap-2 items-center">
            <label>Option 03</label>
            <input
              type="text"
              name="three"
              defaultValue={questionData.options[2].value}
              onChange={(e) => setOption3(e.target.value)}
              className="flex-1 border border-slate-200 p-2 rounded-md"
              placeholder="Enter option text"
            />
          </div>
          <div className="flex gap-2 items-center">
            <label>Option 04</label>
            <input
              type="text"
              name="four"
              defaultValue={questionData.options[3].value}
              onChange={(e) => setOption4(e.target.value)}
              className="flex-1 border border-slate-200 p-2 rounded-md"
              placeholder="Enter option text"
            />
          </div>
          <div className="flex gap-2 items-center">
            <label>Correct Option</label>
            <select
              name="correctAnswer"
              onChange={(e) => onInputChange(e)}
              defaultValue={questionData.correctAnswer}
              className="border border-slate-200 p-2 rounded-md "
            >
              <option value="">Select</option>
              <option value="one">Option 01</option>
              <option value="two">Option 02</option>
              <option value="three">Option 03</option>
              <option value="four">Option 04</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button
              className=" w-16 bg-red-900 rounded-md p-2 text-sm text-white"
              onClick={()=>{navigate(-1)}}
              
            >
              Cancel
            </button>
            <button
              type="submit"
              className=" w-16 bg-green-900 rounded-md p-2 text-sm text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  // return <h1>{formData.question}</h1>
};

export default AssessmentEditQuestion;
