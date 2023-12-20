import React from 'react';
import ReactDOM from 'react-dom/client';

function EventObject() {
    return <>
        <form onSubmit={submitFunction}>
            <h1>Form</h1>
            <input type='text' name="inputText" onMouseOver={inputFunction}></input>
            <input type='text' name="inputText" onChange={inputFunction}></input>
            <button onClick={buttonFunction} value="button">Submit Me</button>
            <button type="submit">Type Button</button>
            <button type="submit" onClick={submitFunction}>In  button Sumit</button>
        </form>    </>
}
let inputFunction = (e) => {
    console.log(e);
    document.querySelector('button').style.backgroundColor = 'red';
}

let submitFunction = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("Form Submitted");
}

let buttonFunction = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
}

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<EventObject />);