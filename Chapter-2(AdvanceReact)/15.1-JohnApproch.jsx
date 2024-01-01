import { useState } from "react";

let Component = () => {
    let [name, setName] = useState('chetan');
    let [status, setStatus] = useState(false);
    return <>
        <button className="btn" onClick={() => setStatus(!status)}>Toggle</button>
        {status || <Name name={name} />}
    </>
}
let Name = ({ name }) => {
    return <>
        <h1>Hi {name}</h1>
    </>
}

export default Component