import React, { Component } from "react";
import "./dropdown.scss"; //8. Add styles so it will be custom dropdown based on div's (not select element)

// 8. dropdown option interface
export interface IDropdownOption {
  id: number;
  value: string;
  selected: boolean;
}

// 8. dropdown props interface
interface Props {
  placeholder: string;
  options: IDropdownOption[];
  optSelected?: string;
  handleOnSelect?: (id) => void;
}

// 8. dropdown state interface
interface State {
  isOpen: boolean;
}

class Dropdown extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = this.initState();
  }

  initState() {
    return {
      isOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  handleOnClick(opt) {
    this.props.handleOnSelect(opt.id);
    this.toggle();
  }

  render() {
    return (
      <>
        <div className="dropdown">
          <button className="btn dropdown-btn" onClick={() => this.toggle()}>
            {/* 7. If nothing selected — placeholder should be shown */}
            {this.props.optSelected || this.props.placeholder}
          </button>
          {this.state.isOpen && (
            <ul className="dropdown-menu">
              {this.props.options.map(opt => {
                return (
                  <li
                    key={opt.id}
                    className={`dropdown-item`}
                    onClick={() => {
                      this.handleOnClick(opt);
                    }}
                  >
                    <span>{opt.value}</span>
                    <span className="dot">{opt.selected ? "·" : ""}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </>
    );
  }
}

export default Dropdown;
