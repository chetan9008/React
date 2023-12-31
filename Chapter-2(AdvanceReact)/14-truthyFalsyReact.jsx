import { useState } from "react";
import { useEffect } from "react";
let Component = () => {
    return <>
        <h2>{"" || "Hello World"}</h2>
        <h2>{"Hello" || "Hello World"}</h2>
        <h2>{"" && "Hello World"}</h2>
        <h2>{"Hello" && "Hello World"}</h2>
    </>
}

export default Component1;


//Anoter Example

import { useState } from "react";
import { useEffect } from "react";
let Component1 = () => {
    let [status, setStatus] = useState(false);
    let [name, setName] = useState('chetan');
    let [permission, setPermission] = useState(" ");
    let [account, setAccount] = useState(1234);
    return <>
        <h1>Name is {status || name} </h1>
        <h2>Account No is {permission && account || "-"}</h2>
    </>
}

export {Component};