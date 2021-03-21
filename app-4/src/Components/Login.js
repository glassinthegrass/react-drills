import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
        username: "",
        password: ""
    };
  }
    handleUsername = (e) => {
    this.setState({username:e})
}
    handlePassword= (e) => {
    this.setState({password:e})
    }
    handleClick=()=> {
        alert(`Username: ${this.state.username} 
        Password:${this.state.password}`)
    }
  render() {

      return (
          <div>
             
                  <input onChange={e=> this.handleUsername(e.target.value)}type='text' placeholder='username' />
                  <input onChange={e=> this.handlePassword(e.target.value)}type='password' placeholder='password' />
                  <button onClick={this.handleClick}>Login</button>
              
        </div>
    )
  }
}
export default Login;
