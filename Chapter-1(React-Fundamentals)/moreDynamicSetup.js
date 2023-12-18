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
        return <>
            {/* <article className="book">
            <h2>{value.title}</h2>
            <img src={value.img} alt={value.title} />
            <h2>{value.author}</h2>
            </article> */}
            <Book title={value.title} author={value.author} img={value.img} />
        </>
    }
)

let name = ['chetan', 'gaurav', 'keshav'];

function BookList() {
    return (
        <>
            <section className="booklist">
                {/* <Book title ={book[0].author} author={book[0].title} img ={book[0].img}/>
                <Book title={book[1].author} author={book[1].title} img={book[1].img} /> */}
                {
                    // name.map((value) => <h1>{value}</h1>)
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
