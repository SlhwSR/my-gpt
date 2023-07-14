import React from "react";
import info from "../assets/info.jpg";
export default function OptionSelection({ arrayItems, selectOption }) {
  return (
    <>
      <h1 className="heading">ChatGPT Clone</h1>
      <img src={info} style={{ width: "200px", height: "200px" }}></img>
      <div className="grid-main">
        {arrayItems.map((item) => {
          return (
            <div
              className="grid-child"
              onClick={() => selectOption(item.option)}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
