import React, { Component } from "react";
import Login from "./Login.jsx";
import Lobby from "./Lobby.jsx";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/lobby" component={Lobby} />
        </Switch>
      </div>
    );
  }
}

export default App;
