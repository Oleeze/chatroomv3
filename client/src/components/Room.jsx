import React, { Component } from "react";

class Room extends Component {
  render() {
    return (
      <div>
        <h4 onClick={() => this.props.onClickGetMessages(this.props.room.id)}>
          {this.props.room.name}
        </h4>
      </div>
    );
  }
}

export default Room;
