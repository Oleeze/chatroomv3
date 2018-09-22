import React, { Component } from "react";
import Room from "./Room.jsx";
import "./styles/RoomList.scss";

class RoomList extends Component {
  render() {
    let style = this.props.RoomListStyle ? "ShowRoomList" : "HideRoomList";

    return (
      <div className={style}>
        <h4 className="roomTitle">LOBBIES</h4>
        <div className="RoomWrapper">
          <div className="Rooms">
            {this.props.Rooms.map(room => (
              <Room
                room={room}
                CurrentRoom={this.props.CurrentRoom}
                key={room.id}
                onClickGetMessages={this.props.onClickGetMessages}
              />
            ))}
          </div>
          <form onSubmit={this.props.onClickCreateRoom}>
            <input
              className="RoomInput"
              type="text"
              placeholder="Room name"
              onChange={this.props.setRoom}
              required
            />
            <button className="RoomSubmit" type="submit">
              Create
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default RoomList;
