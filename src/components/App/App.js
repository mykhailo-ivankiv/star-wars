import React from "react";
import "./App.css";
import BEM from "../../utils/ BEM.js";
import axios from "axios";

const b = BEM("App");

console.log(axios.get("/people"));

const App = () => {
  return (
    <div className={b()}>
      <h1>Factris Technical Assignment</h1>
    </div>
  );
};

export default App;
