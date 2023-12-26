import { useState } from "react"

const App = () => {
  return (
    <UseStateExample/>
    )
}

let UseStateExample = ()=>{
  let [count,setCount] = useState(0);
  return <>
  <h1>{count}</h1>
  <button className="btn" onClick={()=>{
    count++;
    console.log(count);
  }}>Increase After 3 sec</button>
  </>
}
export default App