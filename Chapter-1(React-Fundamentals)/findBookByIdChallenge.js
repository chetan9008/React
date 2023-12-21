// Project First 

import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

let book = [
    {
        author: 'Jordan Moore',
        title: 'Interesting Facts For Curious Minds',
        img: './images/book1.jpg',
        id: 1
    }
    , {
        author: 'James Clear',
        title: 'Atomic Habits',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL600_SR600,400_.jpg'
        , id: 2
    }
]

function BookList() {
    let getBook = (id) => {
        let item = book.find((object) => object.id === id)
        return item;
    }
    return (
        <>
            <section className="booklist">
                {
                    book.map((value) => {
                        return <Book {...value} functionExample={getBook} key={value.id} />
                    })
                }
            </section>
        </>
    )
}

function Book({ img, author, title, functionExample, id }) {
    let findBook = () => {
        let input = document.querySelector('.inputBook').value;
        console.log(functionExample(input));
        if (functionExample(input) !== undefined) {
            console.log(`${input} is find`);
        }
        else {
            console.log(`${input} is not find`);
        }
    }
    let findBookById = () => {
        console.log(functionExample(id));
    }
    return <>
        <article className="book">
            Enter the book name :<input className='inputBook'></input>
            <button onClick={findBook}>Find Book</button>
            <button onClick={findBookById}>Find Book By Id</button>
            <button onClick={() => {
                console.log(functionExample(id));
            }}>Find Book By Another Approch</button>
            <h2>{title}</h2>
            <img src={img} alt={title} />
            <h2>{author}</h2>
        </article>
    </>
}



let root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<BookList />);
