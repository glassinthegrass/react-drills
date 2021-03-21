import React,{Component} from 'react';
import Todo from './Components/Todo'
import './App.css';

class App extends Component() {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}
export default App;
