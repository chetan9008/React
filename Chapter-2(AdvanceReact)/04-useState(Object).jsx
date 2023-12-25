// useState with Object 

import { useState } from "react";
import { object } from "./data";
import { anotherObject } from "./data";
function App() {
  return <Book />;
}

let Book = () => {
  let [objectName, setObject] = useState(object);
  let { name, classOf, subject } = objectName;
  let changeObject = () => {
    // setObject(anotherObject);
    setObject({...objectName,name:'aman'
    })
  }
  return <>
    <h1>Name : {name}</h1>
    <p>Class : {classOf}</p>
    <p>Subject :  {subject}</p>
    <button className="btn" onClick={changeObject}>Change</button>
  </>
}

export default App;