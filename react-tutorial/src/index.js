
import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

import { book } from './data';
import { getBook } from './data';
import Book from './Book';

function BookList() {
    return (
        <>
            <h1 id="PageHeading">Best Selling Books</h1>
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

let root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<BookList />);
