import React, { Component } from "react";
import Moment from "react-moment";
import "moment-timezone";

class Message extends Component {
  render() {
    return (
      <div className="Message">
        <div className="MessageInfo">
          <p>{this.props.message.username}</p>
          <Moment className="Date" fromNow>
            {this.props.message.createdAt}
          </Moment>
        </div>
        <h3>{this.props.message.message}</h3>
      </div>
    );
  }
}

export default Message;
