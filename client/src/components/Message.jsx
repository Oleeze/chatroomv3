import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <div className="Message">
        <h4>{this.props.message.message}</h4>
      </div>
    );
  }
}

export default Message;
