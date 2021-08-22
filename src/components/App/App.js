import React, { Component } from 'react';
import './App.css';
import BEM from "../../utils/ BEM.js"
const b = BEM("App")

class App extends Component {
  render() {
    return (
      <div className={b()}>
        <h1>Factris Technical Assignment</h1>
      </div>
    );
  }
}

export default App;
