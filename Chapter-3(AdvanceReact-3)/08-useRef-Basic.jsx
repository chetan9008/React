import { useEffect, useRef, useState } from "react";

const Component = () => {
  let [count, setCount] = useState(0);
  let refContainer = useRef(null);
  useEffect(() => {
    console.log(refContainer);
  });
  return (
    <div>
      <form
        action=""
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          refContainer.current.classList.add("btn");
          refContainer.current.classList.add("active");
        }}
      >
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <button type="submit" ref={refContainer}>
          Submit
        </button>
      </form>
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
export default Component;
