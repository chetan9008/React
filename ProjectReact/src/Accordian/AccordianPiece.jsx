import { useState } from "react";
const AccordianPiece = ({ id, question, answer }) => {
  let [single, setSingle] = useState(null);
  let handleSingle = (idex) => {
    setSingle(idex === single ? null : idex);
  };
  return (
    <div
      className="brown-div grid"
      onClick={() => {
        handleSingle(id);
      }}
    >
      <span>{question}</span>
      <span>+</span>
      {single === id ? <span>{answer}</span> : <span></span>}
    </div>
  );
};
export default AccordianPiece;
