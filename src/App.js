import './App.css';
import Keyboard from './components/Keyboard';
import Display from './components/Display';
import React from 'react';
import calculate from "./logic/calculate";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };
  
  render() {
    return (
      <div className="calculator">
        <Display value={this.state.next || this.state.total || "0"} />
        <Keyboard clickHandler={this.handleClick}/>
      </div>
    );
  }
}

export default App;
