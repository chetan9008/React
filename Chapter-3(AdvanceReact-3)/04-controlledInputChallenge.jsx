import { useState } from "react"
import { person } from './data';
const Component = () => {
    let [name, setName] = useState('');
    let [user, setUser] = useState(person);
    let submitFunction = (e) => {
        e.preventDefault();
        if (!name) return;
        let object = {
            id: (user.length + 1),
            name: name
        }
        let newUser = [...user, object];
        setUser(newUser);
        setName('');
    }
    return (
        <div>
            <form className="form" onSubmit={submitFunction}>
                <h4>Add user</h4>
                <div className="form-row">
                    <label htmlFor="name" >name</label>
                    <input type="text" id="name" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </div>
                <button className="btn" type="submit">Add</button>
            </form>
            <div>
                <h2>Users</h2>
                {user.map((value) => {
                    return <div key={value.id}>
                        <h5>{value.name}</h5>
                        <button className="btn" onClick={() => {
                            let newUser = user.filter((v) => {
                                if (v.name !== value.name)
                                    return true;
                            })
                            console.log(newUser);
                            setUser(newUser);
                        }}>remove</button>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Component