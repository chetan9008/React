import React from 'react';
import ReactDOM from 'react-dom/client';

function Component() {
    return (
        <>
            <h2>Hello World</h2>
            <input />
            <input></input>
        </>
    )
}

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Component />);