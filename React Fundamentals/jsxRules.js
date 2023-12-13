import React from 'react';
import ReactDOM from 'react-dom/client';

function myFunction() {
    console.log('hello console');
}

function FirstComponent() {
    return (
        <>
            <div className='Component'>
                <h2><a href="www.google.com" onClick={myFunction}>Hello World</a></h2>
            </div>
            <div>Hello Dash</div>
        </>
    );
}

//Rules for jsx 

// 1.always return one element 
// 2.you should use sematics ex section,footer 
// 3.if you have two element then use fragment ex. <React.Fragment><React.Fragment/> or <></>

// 4.attribute should use Camel case 
// 5.class is className in jsx


let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<FirstComponent></FirstComponent>);



