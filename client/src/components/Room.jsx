import React, { Component } from "react";

class Room extends Component {
  render() {
    let currentRoom;
    if (this.props.CurrentRoom === this.props.room.name) {
      currentRoom = "Current Lobby";
    }
    return (
      <div className="Room">
        <h4
          className="RoomTitle"
          onClick={() =>
            this.props.onClickGetMessages([
              this.props.room.id,
              this.props.room.name
            ])
          }
        >
          {this.props.room.name}
        </h4>
        <p>{currentRoom}</p>
      </div>
    );
  }
}

export default Room;
