import React, { Component } from "react";
import Image from './Components/Image'
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      url:
        "https://digital.com/wp-content/uploads/best-web-hosting-badge-300x300.png?x52068"
    };
  }

  render() {
    return (
      <Image url={this.state.url}/>)
  }
}
export default App;
