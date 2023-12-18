// Project First 

import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

let book = [
    {
        author: 'Jordan Moore',
        title: 'Interesting Facts For Curious Minds',
        img: './images/book1.jpg'
    }
    , {
        author: 'James Clear',
        title: 'Atomic Habits',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL600_SR600,400_.jpg'
    }
]

let bookArray = book.map(
    (value) => {
        let { title, img, author } = value;
        return <>
            <Book title={title} author={author} img={img} />
        </>
    }
)

let name = ['chetan', 'gaurav', 'keshav'];

function BookList() {
    return (
        <>
            <section className="booklist">
                {
                    bookArray
                }
            </section>
        </>
    )
}

function Book({ author, title, img }) {
    return (
        <>
            <article className="book">
                <h2>{title}</h2>
                <img src={img} alt={title} />
                <h2>{author}</h2>
            </article>
        </>
    )
}




let root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<BookList />);
