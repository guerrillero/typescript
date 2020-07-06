import React, { useState } from "react";
import "./styles.css";
import Dropdown from "./Dropdown/Dropdown";

const App = () => {
  const items = [
    { id: 1, value: "val 1" },
    { id: 2, value: "val 2" },
    { id: 3, value: "val 3" }
  ];

  // 3. Control initially selected option from parent
  const [optSelected, setOptSelected] = useState({ id: "", value: "" });

  return (
    <div className="App">
      <h1>Universal Weather and Aviation</h1>
      <h2>Coding exercise</h2>
      <br />
      <div className="flex">
        <div>
          <Dropdown
            options={items}
            placeholder="Select option"
            selected={optSelected}
            handleOnSelect={setOptSelected}
          />
        </div>
        <div>
          <h3>{`You selected: ${
            optSelected.value ? optSelected.value : "-"
          }`}</h3>
        </div>
        <div>
          <button className="btn btn-default" onClick={setOptSelected}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

App.propTypes = {};

export default App;
