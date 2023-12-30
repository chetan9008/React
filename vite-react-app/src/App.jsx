import { useState, useEffect } from "react";
import { url } from './../../Chapter-2(AdvanceReact)/13-Challenge(optimized)'
const App = () => {
  return (
    <Component />
  )
}
let Component = () => {
  let [user, setUser] = useState(0);
  let [status, setStatus] = useState(true);
  let [error, setError] = useState(false);

  useEffect(() => {
    let fetchFunction = async () => {
      let result = await fetch(url)
      console.log(result);
      if (!result.ok) {
        setStatus(false);
        setError(true);
        return;
      }
      let data = await result.json();
      setUser(data);
    }
    fetchFunction();
  }, [])
  let {name,avatar_url} = user;
  return <>
    <h1>{name}</h1>
    <img src={avatar_url}></img>
  </>
}
export default App