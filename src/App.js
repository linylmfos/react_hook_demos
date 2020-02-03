import React from 'react';
import Demo1 from "./components/Demo1"
import Demo2 from "./components/Demo2"
import User from "./components/Demo3/User";
import Token from "./components/Demo3/Token"

function App() {
  
  return (
    <div className="App">
      <Demo1 /> 
      <Demo2 /> 
      <User />
      <Token />
    </div>
  );
}

export default App;
