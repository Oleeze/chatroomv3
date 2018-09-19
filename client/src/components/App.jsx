import React, { Component } from "react";
import Lobby from "./Lobby.jsx";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Lobby} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
