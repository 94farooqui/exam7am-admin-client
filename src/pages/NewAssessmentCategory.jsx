import React, { useRef, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "./../firebase";
import { createNewAssessment } from "../apiHelper/assessment.helper";
import { useNavigate } from "react-router-dom";

const defaultNewCategory = {
  title: null,
  description: null,
  image: null,
};

const NewAssessmentCategory = () => {
  const [newCategory, setNewCategory] = useState(defaultNewCategory);
  const formRef = useRef()
  const navigate = useNavigate()


  
  
  const [newError, setNewError] = useState(null);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [file,setFile] = useState(null)

  const onInputChange = (e) => {
    setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
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

    uploadTask.on("state_changed", (snapshot) => {
      console.log("File state changed");
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setUploadPercentage(Math.round(progress));
    },

    (error) => {
        setNewError("Error in upload");
    },

    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
        setNewCategory({ ...newCategory, image: downloadURL })
      );
    },
    );
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const result = await createNewAssessment(newCategory)
    if(result){
        formRef.current.reset()
        navigate('/assessment')
    }
    else setNewError("Something went wrong")
    // console.log(newCategory)
  }
  return (
    <div className="max-w-[1200px] mx-auto font-poppins py-12">
      <div className="w-full bg-white shadow-md p-12">
        <h2 className="text-slate-500 text-2xl font-bold mb-6">
          Add Assessment Category
        </h2>
        <form onSubmit={(e)=>onFormSubmit(e)} className="flex flex-col gap-4" ref={formRef}>
          <div className="flex flex-col gap-1">
            <label>Title</label>
            <input
              onChange={(e) => onInputChange(e)}
              type="text"
              name='title'
              className="p-2 border rounded-md"
              placeholder="Eg: Marketing"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Description</label>
            <textarea
            name='description'
              onChange={(e) => onInputChange(e)}
              className="p-2 border rounded-md resize-none"
              rows={3}
              placeholder="Eg: Get all the essential assessments to master in marketing"
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
          <button
            type="submit"
            className="bg-[#0E416D] text-white px-8 py-2 rounded-md self-center mt-4"
          >
            Save
          </button>
        </form>
        {newError && (
          <p className="text-red-400 text-sm">* Error in uploading file</p>
        )}
      </div>
    </div>
  );
};

export default NewAssessmentCategory;
