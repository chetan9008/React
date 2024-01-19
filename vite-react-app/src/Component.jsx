import { useState } from "react";
import { person } from "./data";
import List from "../../Chapter-4(AdvanceReact)/performance(challenge)/List";
import Form from "../../Chapter-4(AdvanceReact)/performance(challenge)/Form";
const Component = () => {
  const [people, setPeople] = useState(person);
  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };
  return (
    <section>
      <Form addPerson={addPerson} />
      <List people={people} />
    </section>
  );
};
export default Component;
