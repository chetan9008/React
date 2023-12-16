import React from 'react';
import ReactDOM from 'react-dom/client';
import { Book } from './Book.js';
function ExportComponent() {
    return <>
        <Book title="Let us c" Author="Yasvant Kanetkar" />
        <Book title="Let us c" Author="Yasvant Kanetkar" />
        <Book title="Let us c" Author="Yasvant Kanetkar" />
    </>
}

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<ExportComponent />);