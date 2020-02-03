import React from 'react';
import Demo1 from "./components/Demo1"
import Demo2 from "./components/Demo2"
import User from "./components/Demo3/User";
import Token from "./components/Demo3/Token"
import TodoList from "./components/Demo4/TodoList"
function App() {

  return (
    <div className="App">
      {/* <Demo1 /> 
      <Demo2 /> 
      <User />
      <Token /> */}
      <TodoList />
    </div>
  );
}

export default App;
