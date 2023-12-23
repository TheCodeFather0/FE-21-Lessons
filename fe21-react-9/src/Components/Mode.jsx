import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../Slices/ModeSlice";

const Mode = () => {
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  return (
    <button onClick={() => dispatch(changeMode())}>
      {mode === "dark" ? "🌞" : "🌛"}
    </button>
  );
};

export default Mode;
