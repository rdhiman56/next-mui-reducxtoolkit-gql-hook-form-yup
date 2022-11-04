import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../store/counterslice";

const IncrementCounter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);
  return (
    <div>
      <h1>
        Counter: <span>{counter}</span>
      </h1>
      <button onClick={() => dispatch(increment())}>Add to Count</button>
    </div>
  );
};

export default IncrementCounter;

// 2nd way
// import React, {useState} from 'react'

// const IncrementCounter = () => {
//     const [counter, setCounter] = useState(0);
//   return (
//     <div><h1>Counter: <span>{counter}</span></h1>
//     <button onClick={() => setCounter(counter+1)}>Add to Count</button>
//     </div>
//   )
// }

// export default IncrementCounter
