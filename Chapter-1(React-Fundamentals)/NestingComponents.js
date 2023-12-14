import React from "react";
import ReactDOM from "react-dom/client";

function Component() {
    return (
        <>
            <Name />
            <Profile></Profile>
        </>
    )
}

let Name = () => <h2>Chetan</h2>
let Profile = () => <p>Front End developer</p>

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Component />);