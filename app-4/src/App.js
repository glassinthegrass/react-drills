import React, { Component } from "react";
import Login from "./Components/Login";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      arr: ["I am", "a string", "contained in", "an array"],
    };
  }

  render() {
    return <Login />;
  }
}
export default App;
