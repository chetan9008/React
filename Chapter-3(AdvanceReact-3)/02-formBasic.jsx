const Component = () => {
    return (
        <div>
            <form className="form">
                <div className="form-row">
                    <label htmlFor="Name">Name</label><br />
                    <input type="text" id="Name" />
                </div>
                <div className="form-row">
                    <label htmlFor="Email">Email</label><br />
                    <input type="email" id="Email" />
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}
export default Component