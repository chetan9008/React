// Project First 

import React from 'react';
import ReactDOM from 'react-dom/client';


function BookList() {
    return (
        <>
            <Book />
            <Book />
            <Book />
        </>
    )
}

function Book() {
    return (
        <>
            <Title></Title>
            <Image></Image>
            <Author></Author>
        </>
    )
}

let Title = () => <h2>Interesting Facts For Curious Minds</h2>
let Image = () => <img src="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/I/71hwUY5ZmxL._AC_UL600_SR600,400_.jpg" alt="Interesting Facts For Curious Minds" />
let Author = () => <h2> Jordan Moore</h2>


let root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<BookList />);
