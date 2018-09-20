import React, { Component } from "react";
import Login from "./Login.jsx";
import Lobby from "./Lobby.jsx";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/lobby" component={Lobby} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
