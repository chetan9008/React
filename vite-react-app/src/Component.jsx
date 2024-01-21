import { useState } from "react";
const Component = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  return (
    <div>
      <form action="" className="form">
        <div className="form-row">
          <label htmlFor="text"></label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </form>
      <h4>Items Below</h4>
      {items.map((value) => {
        <h2>{value}</h2>;
      })}
    </div>
  );
};
export default Component;
