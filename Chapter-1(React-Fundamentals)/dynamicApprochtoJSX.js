// Project First 

import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

let firstBook = {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book1.jpg'
}

let secondBook = {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL600_SR600,400_.jpg'
}
function BookList() {
    return (
        <>
            <section className="booklist">
                <Book title={firstBook.title} author={firstBook.author} img={firstBook.img} />
                <Book title={secondBook.title} author={secondBook.author} img={secondBook.img} />
            </section>
        </>
    )
}

function Book(props) {
    console.log(props);
    return (
        <>
            <article className="book">
                <h2>{props.title}</h2>
                <img src={props.img} alt={props.title} />
                <h2>{props.author}</h2>
            </article>
        </>
    )
}

let root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<BookList />);
