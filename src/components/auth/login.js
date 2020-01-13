import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
      email: "",
      password: "",
      errorText: ""
    }

  }

  handleChange = e => {
    this.setState({
      [e.target.name]: event.target.value,
      errorText: ""
    })
  }

  handleSubmit = e => {
    axios.post("https://api.devcamp.space/sessions", 
    {
      client: {
        email: this.state.email,
        password: this.state.password
      }
    },
    {withCredentials: true}
    ).then(response => {
      if(response.data.status === 'created'){
        this.props.handleSuccessfulAuth()
        console.log("you did it!")
      }else {
        this.setState({
          errorText: "Email or Password Incorrect"
        })
        this.props.handleUnsuccessfulAuth()
      }
    }).catch(error => {
      this.setState({
        errorText: "An Error has Occurred"
      })
    })
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

        <div>{this.state.errorText}</div>

        <form onSubmit={this.handleSubmit}>
          <input 
            type="email" 
            name="email"
            placeholder="Your Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input 
            type="password" 
            name="password"
            placeholder="Your Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}