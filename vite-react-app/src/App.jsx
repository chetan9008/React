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

  return <>
    <h1>{user.name}</h1>
    <img src={user.avatar_url} alt={user.name}></img>
    <p>works at {user.company}</p>
    <p>{user.bio}</p>
  </>
}
export default App