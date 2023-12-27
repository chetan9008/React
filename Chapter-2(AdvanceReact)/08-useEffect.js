import { useState, useEffect } from "react";

const App = () => {
    return (
        <Counter />
    )
}

let Counter = () => {
    let [count, setCount] = useState(0);
    function sayHello() {
        console.log('hello Sia');
    }
    sayHello();
    useEffect(() => {
        console.log("Hello Diljit");
    }, [])
    return <>
        <h1>{count}</h1>
        <button className="btn" onClick={() => {
            setCount(count = count + 1);
        }}>Increase Me</button>
    </>
}

export default App