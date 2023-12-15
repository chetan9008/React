import React from "react";
import ReactDOM from "react-dom/client";
import './style.css';

function FirstComponent() {

    let styleObject = {
        color: "blue",
        fontSize: "2rem",
        marginTop: "30px"
    }

    return <>
        <h2 style={{
            color: "red",
            fontSize: "2rem",
            marginTop: "30px"
        }}>Hello React</h2>
        <h2 style={styleObject}>Bye Old html</h2>
    </>
}


let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<FirstComponent />);