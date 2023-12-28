import { useState, useEffect } from "react";

const App = () => {
  return (
    <GitUsers />
  )
}

let GitUsers = () => {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        let result = await fetch('https://api.github.com/users')
        let data = await result.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [])
  console.log(users);
  return <>
    <h1>Users</h1>
    {users.map((value, index) => {
      let { avatar_url, id, login, html_url } = value;
      return <Component {...value} key={id} />
    })}
  </>
}

let Component = ({ avatar_url, id, login, html_url }) => {
  return <>
    <img src={avatar_url}></img>
    <p style={{ textAlign: 'center' }}>{login}</p>
    <p style={{ textAlign: 'center' }}>
      <a href={html_url} >Profile</a>
    </p>
  </>
}
export default App