import { useState, useEffect } from "react";
const url = 'https://api.github.com/users/QuincyLarson';
const App = () => {
    return (
        <ChallangeConditionalRendering />
    )
}

let ChallangeConditionalRendering = () => {
    let [user, setUser] = useState(null);
    let [error, setError] = useState(false);
    let [status, setStatus] = useState(true);
    useEffect(() => {
        let fetchDataFunction = async () => {
            try {
                let result = await fetch(url);
                if (!result.ok) {
                    setError(true);
                    setStatus(false);
                    return;
                }
                let data = await result.json();
                setUser(data);
                console.log(user);
            } catch (error) {
                setError(true);
                console.log(error);
            }
            setStatus(false);

        }
        fetchDataFunction();
    }, [])
    if (status)
        return <h2>Loading...</h2>
    if (error)
        return <h2>There is an error</h2>
    let { name, avatar_url, company, bio } = user;
    return <>
        <h1>{name}</h1>
        <img src={avatar_url} alt={name}></img>
        <p>works at {company}</p>
        <p>{bio}</p>
    </>
}
export {url}
export default App