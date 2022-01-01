import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState("");
  
  async function postName(e){
    e.preventDefault();
    console.log(name);
    try{
      await axios.post("http://localhost:8000/post_name", {
        name
      });
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <form onSubmit={postName}>
        <input type="text" value = {name} onChange = {(e) => setName(e.target.value)} />
        <button type = "submit"> Submit</button>
      </form>
    </div>
  );
}

export default App;
