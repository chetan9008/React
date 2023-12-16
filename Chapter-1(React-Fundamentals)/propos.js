import React from "react";
import ReactDOM from "react-dom/client";

function PropsInReact() {
    return <>
        <Book title="Let Us C" author="Yasvant Kanetkar" edition={2001} />
        <Book title="Let Us C++" author="Yasvant Kanetkar" edition={2002} />
        <Book title="Let Us Java" author="Yasvant Kanetkar" edition={2005} />
    </>
}

let Book = (props) => {
    let title = props.title;
    let author = props.author;
    let year = props.edition;
    return <>
        <h2>{title}</h2>
        <p>{author}</p>
        <h5>{year} Edition</h5>
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<PropsInReact />);