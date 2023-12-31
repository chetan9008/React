import { useState } from "react";

let Ternary = () => {
    let [name, setName] = useState('chetan');
    let [toggle, setToggle] = useState(false);

    return <>
        {toggle ? <ShowName name={name}/> : <RemoveName />}
        <button className="btn" onClick={()=>{
            !toggle ? setToggle(true) : setToggle(false)
        }}>Show</button>
    </>
}

let ShowName = ({ name })=>
{
    return <h1>Name is {name}</h1>
}

let RemoveName = ()=>
{
    return 
}

export default Ternary;