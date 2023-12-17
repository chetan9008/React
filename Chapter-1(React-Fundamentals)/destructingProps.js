import React from 'react';
import ReactDOM from 'react-dom/client';

let bookObject = {
    author: 'Let us C',
    title: 'Yasvant Kanetkar',
    edition: 2001
}

function DestructingProps() {
    let { author, title, edition } = bookObject;
    return <>
        <Book author={author} title={title} edition={edition}></Book>
        <Book author={author} title={title} edition={edition}></Book>
    </>
}

let Book = ({ author, title, edition }) => {
    return <>
        <h2>{author}</h2>
        <p>{title}</p>
        <a href="https://www.google.com/">{edition} Edition</a>
    </>
}

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<DestructingProps />);