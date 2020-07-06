import React, { useState } from "react";
import PropTypes from "prop-types";

import "./dropdown.scss";

function Dropdown({ placeholder, options = [], selected, handleOnSelect }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <>
      <div className="dropdown">
        <button className="btn dropdown-btn" onClick={() => toggle()}>
          {selected.value || placeholder}
        </button>
        {open && (
          <ul className="dropdown-menu">
            {options.map(opt => {
              return (
                <li
                  key={opt.id}
                  className={`dropdown-item`}
                  onClick={() => {
                    handleOnSelect(opt);
                    toggle();
                  }}
                >
                  <span>{opt.value} </span>
                  <span className="dot">
                    {selected.id === opt.id ? "·" : ""}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

// 8.Add all types/interfaces like if it will be Production code
Dropdown.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string
    })
  ),
  selected: PropTypes.object
};

export default Dropdown;
