import { useState } from "react";

const Component = () => {
    let [value, setValue] = useState(0);
    return (
        <div>
            <form action="" className="form" onSubmit={(e) => {
                e.preventDefault();
                let formData = new FormData(e.currentTarget);
                let data = [...formData.values()];
                if (data.includes('')) {
                    alert("please enter the data");
                    return;
                }
                let objectData = Object.fromEntries(formData);
                console.log(objectData);
                e.currentTarget.reset();
            }}>
                <div className="form-row">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                </div>

                <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>

                <div className="form-row">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>

                <button className="btn" type="submit" onClick={(e) => {
                    let button = e.target;
                    button.classList.toggle('active');
                }}>Submit</button>
            </form>
        </div>
    )
}
export default Component