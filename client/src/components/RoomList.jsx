import React, { Component } from "react";
import Room from "./Room.jsx";

class RoomList extends Component {
  render() {
    return (
      <div>
        <h4> THis is the Room</h4>
        <div>
          {this.props.Rooms.map(room => (
            <Room
              room={room}
              key={room.id}
              onClickGetMessages={this.props.onClickGetMessages}
            />
          ))}
        </div>
        <form onSubmit={this.props.onClickCreateRoom}>
          <input
            type="text"
            placeholder="Room name"
            onChange={this.props.setRoom}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default RoomList;
