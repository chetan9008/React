import { useState } from "react";

let newItems = Array.from({ length: 5000 }, (_, index) => {
  return (
    <img src="./vite.svg" alt={index} style={{ width: "100px" }} key={index} />
  );
});

const SlowComponent = () => {
  let [items, setItems] = useState(newItems);

  return <>{items}</>;
};
export default SlowComponent;
