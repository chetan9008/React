import { useState } from "react"

const App = () => {
    return (
        <UseStateExample />
    )
}

let UseStateExample = () => {
    let [count, setCount] = useState(0);
    return <>
        <h1>{count}</h1>
        <button className="btn" onClick={() => {
            setTimeout(() => {
                // setCount(count = count + 1);
                // console.log("Click me");
                setCount((currentState) => currentState + 1)
                console.log('click me');
            }, 2000);
        }}>Increase After 3 sec</button>
    </>
}
export default App