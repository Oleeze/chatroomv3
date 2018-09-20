import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <div className="Message">
        <h5>{this.props.message.username}</h5>
        <h4>{this.props.message.message}</h4>
      </div>
    );
  }
}

export default Message;
