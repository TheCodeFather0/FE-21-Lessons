import React from "react";
import Counter from "./Components/Counter";
import Mode from "./Components/Mode";
import "./App.css";

const App = () => {
  return (
    <div>
      <Mode />
      <Counter />
    </div>
  );
};

export default App;
