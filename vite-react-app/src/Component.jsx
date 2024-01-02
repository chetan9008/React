import { useState, useEffect } from "react";

let Component = () => {
    let [status, setStatus] = useState(false);

    return <>
        <button className="btn" onClick={() => {
            setStatus(!status)
        }}>Toggle</button>
        {status && <AnotherComponent />}
    </>
}

let AnotherComponent = ()=>{
    useEffect(()=>{
        console.log('Into the useEffect');
        let someFun = ()=>{
            console.log('scroll');
        }
        window.addEventListener('scroll',someFun)

        return ()=>{
            window.removeEventListener('scroll',someFun)
        }
    },[])
    return <h2>Hi there</h2>
}

export default Component;