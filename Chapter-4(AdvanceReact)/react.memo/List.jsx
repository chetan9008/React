import Person from "./Person";
import { memo } from "react";
const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((value, index) => {
        return (
          <Person
            name={value.name}
            key={index}
            removePerson={removePerson}
            {...value}
          />
        );
      })}
    </>
  );
};
export default memo(List);
