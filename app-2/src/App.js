import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      arr: ['I am', 'a string', 'contained in', 'an array']
    }
  }
  
  render() {
    let map = this.state.arr.map((ele, i) => {
     return <h2 key={i}>{ele}</h2>
    })
    return (<h2>{map}</h2>)
  }
}
export default App;
