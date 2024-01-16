//useState
import { useState } from "react";
import React from "react";
import { person } from "./data";
function App() {
  let [people, setPerson] = React.useState(person);
  let clearAll = () => {
    setPerson([]);
  };
  let clearOne = (name) => {
    let items = people.filter((value) => name.id !== value.id);
    console.log(items);
    setPerson(items);
  };
  let resetFunction = () => {
    setPerson(person);
  };
  return (
    <>
      {people.map((value) => {
        return (
          <List {...value} key={value.id} clearOne={clearOne} value={value} />
        );
      })}
      {people.length === 0 ? (
        <button onClick={resetFunction} className="btn">
          Reset
        </button>
      ) : (
        <button onClick={clearAll} className="btn">
          RemoveAll
        </button>
      )}
    </>
  );
}

let List = ({ name, clearOne, value }) => {
  return (
    <>
      <p>{name}</p>
      <button
        className="btn"
        onClick={() => {
          clearOne(value);
        }}
      >
        remove
      </button>
    </>
  );
};

export default App;
