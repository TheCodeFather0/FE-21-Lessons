import React from "react";
import Header from "../Header";

const index = ({ istifadeciAdi, age, darkMode, setDarkmode }) => {
  const changeMode = () => {
    if (darkMode) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
    setDarkmode(!darkMode);
  };
  return (
    <div>
      <Header userName={istifadeciAdi} />
      <button onClick={changeMode}>{darkMode ? "🌞" : "🌛"}</button>
      <p>{darkMode ? "black" : "white"}</p>
    </div>
  );
};

export default index;
