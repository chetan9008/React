import { useState } from "react"

const Component = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    return (
        <div>
            <form className="form" onSubmit={(e) => {
                e.preventDefault();
                console.log(name);
                console.log(email);
            }}>
                <div className="form-row">
                    <label htmlFor="Name">Name</label><br />
                    <input type="text" id="Name" value={name} onChange={(e) => {
                        console.log(e);
                        setName(e.target.value)
                    }} />
                </div>
                <div className="form-row">
                    <label htmlFor="Email">Email</label><br />
                    <input type="email" id="Email" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}
export default Component