import { useEffect, useState } from "react";

let Component = () => {
    let [state, setState] = useState(false);
    console.log('component mount');
    return <>
        <button className="btn" onClick={() => { setState(!state) }}>
            toggle
        </button>
        {state && <Toggle />}
    </>
}

let Toggle = () => {
    useEffect(() => {
        console.log("This is useEffect");
        let id = setInterval(() => {
            console.log("Interval");
        }, 1000);

        return () => {
            clearInterval(id);
        }
    }, []);
    return <>
        <h1>I show you!</h1>
    </>
}

export default Component;