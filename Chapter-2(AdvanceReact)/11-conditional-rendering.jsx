import { useState, useEffect } from "react";

const App = () => {
    let [status, setStatus] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setStatus(true);
        }, 3000)
    },[])
    if (status)
        return <MultipleReturns />
    else
        return <p>Loading...</p>
}

let MultipleReturns = () => {
    return <>Multiple Return Component</>
}
export default App