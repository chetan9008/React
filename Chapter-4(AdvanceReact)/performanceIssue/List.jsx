import Person from "./Person";

const List = ({ people }) => {
  return (
    <>
      {people.map((value, index) => {
        return <Person name={value.name} key={index} />;
      })}
    </>
  );
};
export default List;
