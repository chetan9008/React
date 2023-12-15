// Project First 

import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function BookList() {
    return (
        <>
            <section className="booklist">
                <Book />
                <Book />
                <Book />
            </section>
        </>
    )
}

function Book() {
    return (
        <>
            <article className="book">
                <Title></Title>
                <Image></Image>
                <Author></Author>
            </article>
        </>
    )
}

let Title = () => <h2>Interesting Facts For Curious Minds</h2>
let Image = () => <img src="./images/book1.jpg" alt="Interesting Facts For Curious Minds" />
let Author = () => <h2> Jordan Moore</h2>


let root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<BookList />);
