import React from 'react'
import ReactDOM from 'react-dom/client'


let information = [
    {
        author: 'Yasvant Kanetkar',
        title: 'Let us C',
        edition: 2001
    },
    {
        author: 'E balaguruswamy',
        title: 'OOP in C++',
        edition: 2010
    }
]

let MoreDynamicSetup = () => {
    return <>
        {
            information.map((value) => {
                let { author, title, edition } = value;
                return <>
                    <Book title={title} author={author} edition={edition} />
                </>
            })
        }
    </>
}

let Book = ({ author, title, edition }) => {
    return <>
        <h1>{author}</h1>
        <h3>{title}</h3>
        <p style={{
            color: 'red'
        }}>{edition} Year</p>
    </>
}

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MoreDynamicSetup />);