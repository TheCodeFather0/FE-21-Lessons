import { useEffect, useReducer, useState } from "react";
import "./App.css";
import MyReducers from "./Reducers/MyReducers";
import TodoList from "./Components/TodoList";

const App = () => {
  // const [state, dispatch] = useReducer(MyReducers, {
  //   count: 0,
  //   username: "Admin",
  //   mode: "light",
  // });

  // const { count, username, mode } = state;

  // useEffect(() => {
  //   document.body.className = mode;
  // }, [mode]);
  return (
    <div>
      {/* <button
      onClick={() =>
      dispatch({
      type: "CHANGE_MODE",
      mode: state.mode === "dark" ? "light" : "dark",
      })
      }
      >
      {mode === "dark" ? "🌞" : "🌛"}
      </button>
      <h1>{username}</h1>
      <h1>{count}</h1>
      <button
      onClick={() =>
      dispatch({
      type: "REQEMI_ARTIR",
      })
      }
      >
      artir
      </button>
      <button
      onClick={() => {
      dispatch({
      type: "REQEMI_AZALT",
      });
      }}
      >
      azalt
      </button> */}

      <TodoList />
    </div>
  );
};

export default App;
