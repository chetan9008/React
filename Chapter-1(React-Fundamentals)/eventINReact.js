import React from 'react'
import ReactDOM from 'react-dom/client'

function Form() {
    return <>
        <h2>Simple Form</h2>
        <input type='text' name='formInput' onChange={inputFunction} /><p></p>
        <button onClick={buttonFunction}>Click me</button>
    </>
}

let inputFunction = () => {
    console.log("Input Changed");
}

let buttonFunction = () => {
    alert("Button is clicked");
}
let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Form />);