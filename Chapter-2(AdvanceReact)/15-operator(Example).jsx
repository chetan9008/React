import { useState } from "react";

let TruthFalsy = () => {
    let [user, setUser] = useState('chetan');
    let [status, setStatus] = useState(true);
    console.log(user);
    return <>
        {user && <MyComponent name={user} />}
    </>
}

let MyComponent = ({ name }) => {
    return <h1>Name is {name}</h1>
}

export default TruthFalsy;