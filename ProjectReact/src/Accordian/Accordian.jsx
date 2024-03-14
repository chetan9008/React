import { useState } from "react";
import "./Accordian.css";
import dataItems from "./data";
import AccordianPiece from "./AccordianPiece";
const Accordian = () => {
  return (
    <>
      <div className="brown-div">Enable Multi Selection</div>
      {dataItems && dataItems.length > 0 ? (
        dataItems.map((list, index) => {
          return <AccordianPiece {...list} key={index} />;
        })
      ) : (
        <h1>Data not found</h1>
      )}
    </>
  );
};
export default Accordian;
