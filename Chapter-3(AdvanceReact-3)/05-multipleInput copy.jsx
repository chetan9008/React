import { useState } from "react"

const Component = () => {
    let [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })
    let handleInput = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        let key = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [key]: value })
    }
    return (
        <div>
            <form className="form">
                <div className="form-row">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={handleInput} value={user.name} />
                </div>
                <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={handleInput} value={user.email} />
                </div>
                <div className="form-row">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={handleInput} value={user.password} />
                </div>
            </form>
        </div>
    )
}
export default Component