import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  kvadrat,
  nan,
  reset,
  vur2,
} from "../Slices/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>azalt</button>
      <button onClick={() => dispatch(increment(1))}>artir</button>
      <button onClick={() => dispatch(reset())}>sifirla</button>
      <button onClick={() => dispatch(vur2())}>2ye vur</button>
      <button onClick={() => dispatch(kvadrat())}>kvadrata yukselt</button>
      <button onClick={() => dispatch(nan())}>NaN</button>
    </div>
  );
};

export default Counter;
