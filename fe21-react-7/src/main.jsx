import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import UserContextProvider from "./Context/UserContext.jsx";
import ModeContextProvider from "./Context/ModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <ModeContextProvider>
      <App />
    </ModeContextProvider>
  </UserContextProvider>
);
