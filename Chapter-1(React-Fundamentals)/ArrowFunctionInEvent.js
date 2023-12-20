import React from 'react'
import ReactDOM from 'react-dom/client'

let ArrowFunctionForm = () => {
    return <>
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log("Form Sumitted");
        }}>
            <h1>Form</h1>
            <input type="text" name="inputTag" onChange={(e) => {
                console.log(e);
                console.log(e.target.value);
                let input = e.target.value;
                console.log(input.length);
            }}></input>
            <button type="submit">Sumit</button>
        </form>
    </>
}


let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<ArrowFunctionForm></ArrowFunctionForm>)