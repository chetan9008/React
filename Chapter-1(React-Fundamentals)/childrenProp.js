import React from "react";
import ReactDOM from "react-dom/client";


function ChildrenProp() {
    return <>
        <Book title='Let us C' author='Yasvant Kanetkar'>
            <a href="www.google.com">2001 Edition</a>
            <h1>Book</h1>
        </Book>
    </>
}

let Book = ({ title, author, children }) => {
    return <>
        <h2>{title}</h2>
        <p>{author}</p>
        {children}
    </>
}

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<ChildrenProp />);