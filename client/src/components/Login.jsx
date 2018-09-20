import React, { Component } from "react";
import LoginHeader from "./LoginHeader.jsx";
import "./styles/Login.scss";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <LoginHeader />
        <div className="LoginWrapper">
          <h2>LOGIN</h2>
          <div className="Login">
            <div className="Field">
              <p>Username</p>
              <input
                value={username}
                onChange={e => this.setState({ username: e.target.value })}
                type="text"
                placeholder="Enter a username"
                required
              />
            </div>
          </div>
        </div>
        <div className="Enter">
          <Link className="Join" to="/lobby">
            JOIN THE FUN
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
