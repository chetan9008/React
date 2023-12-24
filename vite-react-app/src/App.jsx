//useState
import { useState } from 'react';
import React from 'react';
import { person } from './data';
function App() {
  let [ people, setPerson ] = React.useState(person);
  let clearAll = ()=>{
    setPerson([]);
  }
  let clearOne = (name)=>{
    let items = people.filter((value)=> name.id !== value.id)
    console.log(items);
    setPerson(items);
  }
  return (
    <>
      {people.map((value) => {
        return <List {...value} key={value.id} clearOne={clearOne} value={value} />
      })}
      <button onClick={clearAll}>RemoveAll</button>
    </>
  )
}

let List = ({ name,clearOne,value }) => {
  return <>
    <p>{name}</p>
    <button onClick={()=>{
      clearOne(value)
    }}>remove</button>
  </>
}

export default App
