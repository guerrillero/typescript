import React, { Component } from "react";
import "./styles.css";
import Dropdown, { IDropdownOption } from "./Dropdown/Dropdown";

// 8. Add all types/interfaces like if it will be Production code
interface Props {}

// 8. App state interface
interface State {
  items: IDropdownOption[];
  optSelected: string;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = this.initState();
  }

  initState() {
    return {
      // 3. Control initially selected option from parent
      // set selected: true
      items: [
        { id: 0, value: "val 1", selected: false },
        { id: 1, value: "val 2", selected: false },
        { id: 2, value: "val 3", selected: false }
      ],
      optSelected: "" //item selected value
    };
  }

  handleOnSelect = id => {
    if (id < 0) {
      return this.setState(this.initState());
    } else {
      let _items = this.state.items.map(val => {
        if (val.id === id) {
          val.selected = true;
        } else {
          val.selected = false;
        }
        return val;
      });

      this.setState({
        items: _items,
        optSelected: _items[id].value
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Universal Weather and Aviation</h1>
        <h2>Coding exercise</h2>
        <br />
        <div className="flex">
          <div>
            <Dropdown
              options={this.state.items} // 1. Pass Dropdown options as props
              placeholder="Select an option" // 2. Pass placeholder text as props
              optSelected={this.state.optSelected} // 3. Control initially selected option from parent
              handleOnSelect={this.handleOnSelect} // 4. Parent component needs to know what option is selected and be able to subscribe to change
            />
          </div>
          <div>
            {/* 5. Show selected option title */}
            <h3>{`You selected: ${
              this.state.optSelected ? this.state.optSelected : "-"
            }`}</h3>
          </div>
          <div>
            {/* 6. Show clear button (to clear selected option) */}
            <button
              className="btn btn-default"
              onClick={() => this.handleOnSelect(-1)}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
