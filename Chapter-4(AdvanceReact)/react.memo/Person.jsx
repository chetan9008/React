const Person = ({ name, removePerson, id }) => {
  console.log("Render");
  return (
    <>
      <h2>{name}</h2>
      <button className="btn" onClick={() => removePerson(id)}>
        remove
      </button>
    </>
  );
};
export default Person;
