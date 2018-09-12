import React, { Component } from "react";
import LoginHeader from "./LoginHeader.jsx";
import "./Login.scss";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      username: "",
      email: "",
      password: ""
    };
  }

  render() {
    const { login, username, email, password } = this.state;
    return (
      <div>
        <LoginHeader />
        <div className="LoginWrapper">
          <h2>{login ? "Login" : "Create a new account"}</h2>
          <div className="Login">
            {!login && (
              <div className="Field">
                <p>Username</p>
                <input
                  className="Username"
                  value={username}
                  onChange={e => this.setState({ name: e.target.value })}
                  type="text"
                  placeholder="Your name"
                />
              </div>
            )}
            <div className="Field">
              <p>Email</p>
              <input
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
                type="text"
                placeholder="Your email"
              />
            </div>
            <div className="Field">
              <p>Password</p>
              <input
                type="text"
                placeholder="Password"
                onChange={e => this.state({ password: e.target.value })}
                value={password}
              />
            </div>
            <p onClick={() => this.setState({ login: !login })}>
              I need an account
            </p>
            <div onClick={() => this.props.history.push("/lobby")}>
              <h4>Sign up</h4>
            </div>
          </div>
        </div>
        <a class="google-btn" href="/google">
          Google+
        </a>
      </div>
    );
  }
}

export default Login;
