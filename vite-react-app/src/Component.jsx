import { useState } from "react";
import List from "../../Chapter-4(AdvanceReact)/performanceIssue/List";
import { person } from "./data";
const Component = () => {
  let [count, setCount] = useState(0);
  let [people, setPeople] = useState(person);
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
      <List people={people} />
    </div>
  );
};
export default Component;
