import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext("");

const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("mode")) {
      setMode("light");
    } else {
      setMode(localStorage.getItem("mode"));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContextProvider;
