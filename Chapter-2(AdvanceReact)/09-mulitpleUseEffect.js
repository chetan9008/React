import { useEffect, useState } from "react";

const App = () => {
    return (
        <MultipleUseEffects />
    )
}

let MultipleUseEffects = () => {
    let [firstCount, setFirstCount] = useState(0);
    let [secondCount, setSecondCount] = useState(0);
    useEffect(() => {
        console.log("First Count");
    }, [firstCount])


    useEffect(() => {
        console.log("Second Count");
    }, [secondCount])
    return <>
        <h1>First {firstCount}</h1>
        <button className="btn" onClick={() => {
            setFirstCount(firstCount = firstCount + 1);
        }}>Increase First</button>
        <h1>Second {secondCount}</h1>
        <button className="btn" onClick={() => {
            setSecondCount(secondCount = secondCount + 1)
        }}>Increase Second</button>
    </>
}
export default App