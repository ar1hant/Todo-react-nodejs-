import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  async function postName(e){
    e.preventDefault();
    try{
      await axios.get("/").then(function(res){
        window.location = "http://localhost:8000/todos";
      });
      console.log("here");
    } catch(error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <h1>Welcome</h1>
      <form onSubmit={postName}>
        <button type = "submit">Click Here</button>
      </form>
    </div>
  );
}

export default App;