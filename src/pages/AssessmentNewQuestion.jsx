import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createNewQuestion } from "../apiHelper/assessment.helper";

const initialValues = {
  question: "",
  options: [],
  image: "",
  correctAnswer: "",
};

const AssessmentNewQuestion = () => {
  const formRef = useRef(null)
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate()
  const [newQuestion, setNewQuestion] = useState(initialValues);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [file, setFile] = useState(null);

  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");

  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");

  const onInputChange = (e) => {
    setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value });
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
    console.log(newQuestion);
    const optinosValueArray = [option1, option2,option3,option4]
    const optionsKeyArray = ["one", "two" , "three" , "four"]
    for(let i=0; i<optinosValueArray.length; i++){
      // newQuestion.options.push({(i+1) = optinosValueArray[i]})
      let obj = {}
      obj["key"] = optionsKeyArray[i]
      obj["value"] = optinosValueArray[i];
      setNewQuestion({...newQuestion, options:newQuestion.options.push(obj) })
    }
    const questionAdded = createNewQuestion({ id: id, question: newQuestion });  //sending data to helper function
    if(questionAdded){
      setNewQuestion(initialValues)
      formRef.current.reset()
      navigate(-1)
    }
  };
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
              onChange={(e) => onInputChange(e)}
              className="p-2 resize-none border border-slate-300 rounded-md"
              rows={3}
              placeholder="Add a new question"
            />
          </div>
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
              type="reset"
              className=" w-16 bg-red-900 rounded-md p-2 text-sm text-white"
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
};

export default AssessmentNewQuestion;
