import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      arr: ["I am", "a string", "contained in", "an array"],
      filterString: ''
    };
    
  }
  handleChange(e) {
      this.setState({filterString: e})
    }
  render() {
    const { arr } = this.state
    let map = arr.filter((ele, i) => {
      return ele.includes(this.state.filterString)
    }).map((ele, i) => {
      return <h1 key={i}>{ele}</h1>
    })
    return (
      <div>
        <p>{map}</p>
        <input type='text' onChange={e => this.handleChange(e.target.value.toLowerCase())}/>
      </div>
    );
  }
  }

export default App;
