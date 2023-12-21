import React from 'react'
import ReactDOM from 'react-dom/client'

//props only pass down

let name = 'chetan';
let displayName = () => {
    console.log(`Name is ${name}`);
}

let PropDriling = () => {
    return <ComponentEx function={displayName} />
}
let ComponentEx = (props) => {

    return <>
        <button onClick={props.function}>Button</button>
    </>
}
let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<PropDriling></PropDriling>)