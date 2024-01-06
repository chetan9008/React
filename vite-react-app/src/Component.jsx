import { useState } from "react"
let FrameWork = ['react','angular','vue'];
const Component = () => {
    let [agree,setAgree] = useState(false);
    let [list,setList] = useState('react');
  return (
    <div>
        <form className="form">
            <div className="form-row">
                <label htmlFor="checkbox">I Agree</label>
                <input type="checkbox" id="checkbox" checked={agree} onChange={(e)=>{
                    console.log(e.target.checked);
                    setAgree(e.target.checked);
                }}/>
            </div>
            <div className="form-row">
                <label htmlFor="list">FrameWork</label>
                <select name="list" id="list" value={list} onChange={(e)=>{
                    console.log(e.target.value);
                    setList(e.target.value)
                }}>
                    {FrameWork.map((value,index)=>{
                        return <option key={index}>{value}</option>
                    })}
                </select>
            </div>
        </form>
    </div>
  )
}
export default Component