import React from 'react';
import ReactDOM from 'react-dom/client';

function FirstComponent() {
    return <h2>First Component</h2>
}

// javascript innerCode inturn to jsx 

// function FirstComponent() {
//     return React.createElement('h2', {}, "Second Component");
// }

// function FirstComponent() {
//     return React.createElement('div', {id:"heading"},
//         React.createElement('h2', {}, "First Component"));
// }


let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<FirstComponent></FirstComponent>);



