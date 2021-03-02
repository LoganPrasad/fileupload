import logo from './logo.svg';
import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setstate] = useState({
    selectedFile:null
  })
  const [data, setData] = useState("")

  const [convertdata,setconvertdata] = useState("")

  

  const onChnage = (event) => {
    
    
   setstate({ selectedFile: event.target.files[0] });
   var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
    
      setData(event.target.result)
    };

  reader.readAsText(file);
   
}
  const onUpload = () => {
    
    // Create an object of formData
   const formData = new FormData();
  
    // Update the formData object
    formData.append(
      "myFile",
      state.selectedFile,
     state.selectedFile.name
    );
    var config = {
      headers: {'Content-Type': 'text/xml'}
 };
 
    axios.post("http://localhost:50317/api/Values", formData,config)
      

    
  }


    
  const showFile = () => {
    
    if (state.selectedFile) {
       
      return (
        <div>
          <h2>File Details:</h2>
           
          <p>File Name: {state.selectedFile.name}</p>  
            <div>
              <textarea value={data} >

            
             
              </textarea>
              <textarea value={convertdata}></textarea>
              </div>      
          

        </div>
      );
    }
  };
  
  return (
    <div className="app_container">
            <h1>
             File Converter
            </h1>
            <div>
                <input type="file" onChange={onChnage} />
                <button onClick={onUpload}>
                  Convert To Json!
                </button>
            </div>
          {showFile()}
        </div>
  );
}

export default App;
