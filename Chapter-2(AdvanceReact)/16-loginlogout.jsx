import { useState } from "react";

let Component = () => {
    let [user, setUser] = useState(null);
    let login = () => {
        setUser({
            name: 'chetan'
        })
    }
    let logout = () => {
        setUser(null);
    }
    return <>
        {
            user ?
                <LogoutComponent name={user.name} functionEx={logout} />
                :
                <LoginComponent functionEx={login} />
        }
    </>
}

let LoginComponent = ({ functionEx }) => {
    return <>
        <h4>Please Login</h4>
        <button className="btn" onClick={functionEx}>Login</button>
    </>
}
let LogoutComponent = ({ name, functionEx }) => {
    return <>
        <h4>Hi there,{name}</h4>
        <button className="btn" onClick={functionEx}>Log out</button>
    </>
}
export default Component;