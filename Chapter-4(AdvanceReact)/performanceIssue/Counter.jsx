import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h2>Value : {count}</h2>
      <button
        className="btn"
        onClick={() => {
          setCount((count = count + 1));
        }}
      >
        Increase
      </button>
    </div>
  );
};
export default Counter;
