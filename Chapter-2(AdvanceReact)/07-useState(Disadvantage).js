import React, { useState } from "react"
const App = () => {
    return (
        <Component />
    )
}

let Component = () => {
    let [count, setCount] = useState(1);

    function sayHi() {
        console.log("Hi Sia");
        setCount(count + 1);
    }
    sayHi();
    return <React.Fragment>
        <h1>{count}</h1>
        <button className="btn" onClick={() => {
            setCount(count + 1);
        }}>Increase Me</button>
    </React.Fragment>
}
export default App