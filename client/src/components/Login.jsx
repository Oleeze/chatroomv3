import React, { Component } from "react";
import LoginHeader from "./LoginHeader.jsx";
import "./styles/Login.scss";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  submitForm(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: "/lobby",
      state: { username: this.state.username }
    });
  }
  render() {
    const { username } = this.state;
    return (
      <div>
        <LoginHeader />
        <div className="LoginWrapper">
          <h2>LOGIN</h2>
          <form onSubmit={this.submitForm.bind(this)}>
            <div className="Login">
              <div className="Field">
                <p>Username</p>
                <input
                  onChange={e => this.setState({ username: e.target.value })}
                  type="text"
                  placeholder="Enter a username"
                  required
                />
              </div>
            </div>
            <button className="Enter" type="submit">
              <p>JOIN THE FUN</p>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
