import React, { useState } from "react";
import Home from "./Components/Home";
import TodoList from "./Components/TodoList";
import "./app.css";

const App = () => {
  const [user, setUser] = useState("Ramin");
  const [darkMode, setDarkmode] = useState(false);
  return (
    <div>
      <Home
        istifadeciAdi={user}
        age={21}
        darkMode={darkMode}
        setDarkmode={setDarkmode}
      />
      <TodoList />
    </div>
  );
};

export default App;
