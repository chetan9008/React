import React from 'react';
import ReactDOM from 'react-dom/client';

function JSXinJavascript() {
    return <>
        <Book />
        <Book />
        <Book />
    </>
}
const author = 'Yasvant Kanetkar';
let year = 2001;
let Book = () => {
    const title = 'Let Us C';
    return <>
        <h2>{title + " is Book"}</h2>
        <p>{author}</p>
        <p>{year + 10} Edition</p>
        <p>{200 * 12 + " Copies Sold Out"}</p>
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<JSXinJavascript />);