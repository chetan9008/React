import React from 'react';
import ReactDOM  from 'react-dom/client';

function FirstComponent()
{
    return <h2>Hello React</h2>
}

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<FirstComponent></FirstComponent>);



