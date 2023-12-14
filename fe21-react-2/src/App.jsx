import { useState } from "react";
import Count from "./Components/Count";
import Decrement from "./Components/Decrement";
import Increment from "./Components/Increment";
import Reset from "./Components/Reset";
import CustomIncrement from "./Components/CustomIncrement";
import "./style.css";

const App = () => {
  const [count, setCount] = useState(45);
  return (
    <div>
      <Count reqem={count} />
      <Reset sifirla={setCount} />
      <Decrement reqem={count} azalt={setCount} />
      <Increment reqem={count} artir={setCount} />
      <CustomIncrement setCount={setCount} />
    </div>
  );
};

export default App;
