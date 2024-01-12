import { useEffect, useRef, useState } from "react";

const Component = () => {
  let [count, setCount] = useState(0);
  let refContainer = useRef(null);
  let isMounted = useRef(false);
  useEffect(() => {
    refContainer.current.focus();
  });
  useEffect(() => {
    if (isMounted.current) {
      console.log(refContainer);
    } else {
      isMounted.current = true;
      return;
    }
  }, [count]);
  return (
    <div>
      <form
        action=""
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
        <div className="counter">
          <h2>Value : {count}</h2>
          <button
            onClick={() => {
              setCount((count = count + 1));
            }}
          >
            Increase
          </button>
        </div>
      </form>
    </div>
  );
};
export default Component;
