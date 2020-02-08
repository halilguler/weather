import React, { Component } from "react";
import axios from "axios";

import "./Login.css";
class Login extends Component {
  state = {
    username: "",
    password: "",
    dataResp: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:3001/users")
      .then(resp => {
        this.setState({
          dataResp: resp.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onLogin = () => {
    if (
      this.state.dataResp[0].name === this.state.username &&
      this.state.dataResp[0].pass === this.state.password
    ) {
      this.props.history.push("/weather");
    }
  };

  handleUserChange = evt => {
    this.setState({
      username: evt.target.value
    });
  };
  handlePassChange = evt => {
    this.setState({
      password: evt.target.value
    });
  };

  render() {
    return (
      <div className="login-wrap">
        <h2>Weather App</h2>

        <form className="form">
          <input
            type="text"
            placeholder="Username"
            required
            value={this.state.username}
            onChange={this.handleUserChange}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={this.state.password}
            onChange={this.handlePassChange}
          />

          <button onClick={this.onLogin}>Login</button>
        </form>
      </div>
    );
  }
}
export default Login;
