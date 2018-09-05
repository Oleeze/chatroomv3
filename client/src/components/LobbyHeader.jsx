import React, { Component } from "react";
import { Link } from "react-router-dom";
class LobbyHeader extends Component {
  render() {
    return (
      <div className="LobbyWrapper">
        <div className="LobbyHeader">
          <div className="LobbyHeaderInside">
            <div className="LobbyHeaderLeft">
              <nav onClick={() => this.props.hideRoomList()}>
                <div />
                <div />
                <div />
              </nav>
              <img src={require("./chatlogo.png")} width="30" height="30" />
            </div>
          </div>
          <div className="LobbyHeaderInside">
            <div className="LobbyHeaderRight">
              <h4>Oleg Rudenko</h4>

              <Link to="/">
                {" "}
                <h4 className="Logout">Log Out </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LobbyHeader;
