//useState
import { useReducer, useState } from "react";
import React from "react";
import { person } from "./data";

let defaultState = {
  people: person,
};

const CLEAR = "CLEAR";
const REMOVE = "REMOVE";
const RESET = "RESET";

let reducer = (state, action) => {
  switch (action.type) {
    case CLEAR:
      return { ...state, people: [] };
      break;
    case RESET:
      return { ...state, people: person };
      break;
    case REMOVE:
      let id = action.payload.id;
      return {
        ...state,
        people: state.people.filter((value) => value.id !== id),
      };
    default:
      // return state;
      throw new Error(`action type "${action}" doesn't match`);
  }
};

function App() {
  let [state, dispatch] = useReducer(reducer, defaultState);
  let clearAll = () => {
    dispatch({ type: CLEAR });
    // setPerson([]);
  };
  let clearOne = (name) => {
    dispatch({ type: REMOVE, payload: { id: name.id } });
    // let items = people.filter((value) => name.id !== value.id);
    // console.log(items);
    // setPerson(items);
  };
  let resetFunction = () => {
    dispatch({ type: RESET });
    // setPerson(person);
  };
  return (
    <>
      {state.people.map((value) => {
        return (
          <List {...value} key={value.id} clearOne={clearOne} value={value} />
        );
      })}
      {state.people.length === 0 ? (
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
