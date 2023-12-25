// useState John Example 

import { useState } from "react"

const App = () => {
    return (
        <Person />
    )
}

let Person = () => {
    let [name, setName] = useState('chetan');
    let [Class, setClass] = useState('Bsc');
    let [age, setAge] = useState(21);
    let ChangeState = () => {
        setName('Aman');
        setAge(22);
    }
    return <>
        <h2>{name}</h2>
        <h3>{Class}</h3>
        <h4>{age}</h4>
        <button className="btn" onClick={ChangeState}>Change</button>
    </>
}

export default App

