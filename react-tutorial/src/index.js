import React from 'react'
import ReactDOM from 'react-dom/client'

let object = [
    {
        author: 'Yasvant Kanetkar',
        title: 'Let us c'
    }, {
        author: 'Yash Kanetkar',
        title: 'Let us Java'
    },
]

let BookList = () => {
    return object.map((value,index)=>{
        return <Book {...value} key={index}/>
    })
}

let display = (parameter,aut)=>{
console.log(parameter + aut);
}

let Book = ({author,title})=>{
    return <>
        <h1>{author}</h1>
        <button onClick={(e)=>{
            console.log(e.target);
            console.log(title);
        }}>Click Me</button>
        <p></p>
        <button onClick={()=> display("again you",author)}>
        Again You
        </button>
        <p>{title}</p>
    </>
}
let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList></BookList>)