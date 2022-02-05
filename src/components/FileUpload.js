import React, { useState } from "react";
import axios from "axios";

export default function FileUpload() {
  const [uploadFile, setUploadFile] = useState("")

  const handleFileReader = (event) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e) => {
      setUploadFile({data:reader.result.split(',').pop(),fileName:event.target.files[0].name})
    };
  }

  

  // axios.post('http://localhost:4000/uploaded_file', {
  //   'Access-Control-Allow-Origin' : '*' 
  // })

  const uploadHandler = () => {
    fetch('http://localhost:4000/uploaded_file', 
    {method: "POST",
      header: {
        "access-control-allow-origin" : "*"
      }})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
}

  return (
    <div className="App">
     <label>Select a Folder</label>
       <input
        onChange={handleFileReader}                
        type="file"
        accept=".zip,.rar,.7zip"
       />
      <button onClick={uploadHandler}>
         Upload Folder
      </button>
    </div>
  );
}