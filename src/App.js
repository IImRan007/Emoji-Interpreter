import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("Click to know my name");
  const changeName = () => {
    let value = name;
    // if (value === "Click to know my name") {
    //   setName("Mohd Imran");
    // } else {
    //   setName("Click to know my name");
    // }

    // Using ternary operator
    value === "Click to know my name"
      ? setName("Mohd Imran")
      : setName("Click to know my name");
  };
  return (
    <div className="main_div">
      <h1>{name}</h1>
      <button className="btn" onClick={changeName}>
        Click Me!!
      </button>
    </div>
  );
};

export default App;
