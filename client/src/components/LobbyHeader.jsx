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
              <img src={require("./chatlogo.png")} width="43" height="43" />
            </div>
          </div>
          <div className="LobbyHeaderInside">
            <div className="LobbyHeaderRight">
              <h4>{this.props.Name}</h4>

              <Link className="Logout" to="/">
                {"Sign Out "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LobbyHeader;
