//useState
import { useState } from 'react';
function App() {
    let [count, setCount] = useState(0);

    let incrementFunction = () => {
        setCount(count++);
    }
    return (
        <>
            <h1>Count :  {count}</h1>
            <button className="btn" onClick={incrementFunction}>Increment Me</button>
        </>
    )
}

export default App
