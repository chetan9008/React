import { useState, useCallback, useMemo } from "react";
import { person } from "./data";
import List from "../../Chapter-4(AdvanceReact)/react.memo/List";
import slowFunction from "../../Chapter-4(AdvanceReact)/02-slowFunction";
const Component = () => {
  const [people, setPeople] = useState(person);
  const [count, setCount] = useState(0);

  let value = useMemo(() => slowFunction(), []);
  console.log(value);

  let removePerson = useCallback(
    (id) => {
      let newPerson = people.filter((value) => value.id !== id);
      setPeople(newPerson);
    },
    [people]
  );
  return (
    <section>
      <button
        className="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        <h1>Increase ({count})</h1>
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default Component;
