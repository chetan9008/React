import { useEffect, useState } from "react";

let Component = () => {
    let [state, setState] = useState(false);
    return <>
        <button className="btn" onClick={() => { setState(!state) }}>
            toggle
        </button>
        {state && <Toggle />}
    </>
}

let Toggle = () => {
    useEffect(()=>{
        console.log("This is useEffect");
    },[]);
    return <>
        <h1>I show you!</h1>
    </>
}

export default Component;