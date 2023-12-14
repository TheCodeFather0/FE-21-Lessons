import { useState } from "react";

const CustomIncrement = ({ setCount }) => {
  const [inpValue, setInpValue] = useState("");
  return (
    <div className="box">
      <input
        type="text"
        value={inpValue}
        onChange={(e) => {
          setInpValue(+e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCount(inpValue);
          setInpValue("");
        }}
      >
        Increment by amount
      </button>
    </div>
  );
};

export default CustomIncrement;
