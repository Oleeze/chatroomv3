import React, { Component } from "react";
import Login from "./Login.jsx";
import Lobby from "./Lobby.jsx";
import { Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Route exact path="/" component={Login} /> */}
        <Route exact path="/" component={Lobby} />
      </div>
    );
  }
}

export default App;
