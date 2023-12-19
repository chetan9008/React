import React from "react";
import ReactDOM from "react-dom/client";

let book = [
    {
        author: "yasvant Kanetkar",
        title: "let us c",
        id: 1
    },
    {
        author: "E bala",
        title: "OOP in C++",
        id: 2
    }
]


function PassingObjectToComponent() {
    return <>
        {
            book.map((value) => {
                console.log(value);
                return <Book {...value} key={value.id} />
            })
        }
    </>

}

let Book = (props) => {
    let { author, title } = props;
    return <>
        <h1>{author}</h1>
        <p>{title}</p>
    </>
}

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<PassingObjectToComponent />);