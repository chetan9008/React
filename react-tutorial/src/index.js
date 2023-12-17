import React from "react";
import ReactDOM from "react-dom/client";


function ChildrenProp() {
    let object = {
        name: 'chetan',
        class: 'bsc'
    }
    return <>
        <Book title='Let us C' author='Yasvant Kanetkar'
            object={object}
        >
            <a href="www.google.com">2001 Edition</a>
            <h1>Book</h1>
        </Book>
    </>
}

let Book = ({ title, author, object, children }) => {
    console.log(object);
    return <>
        <h2>{title}</h2>
        <p>{author}</p>
        {children}
        <p>Name : {object.name}</p>
        <p>Class : {object.class}</p>
    </>
}

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<ChildrenProp />);