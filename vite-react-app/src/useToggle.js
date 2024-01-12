import { useState } from "react"

let useToggle = (defualt)=>{
    let [status,setStatus] = useState(defualt);
    let Toggle = ()=>{
        setStatus(!status);
    }
    return [status,Toggle];
}

export default useToggle;