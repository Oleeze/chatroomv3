import React, { Component } from "react";
import Message from "./Message.jsx";
import "./styles/MessageList.scss";

class MessageList extends Component {
  render() {
    return (
      <div
        className="OuterMessageListWrapper"
        onClick={() => this.props.HideRooms()}
      >
        <div className="MessageListWrapper">
          <div className="MessageList">
            {this.props.Messages.map(message => {
              return <Message message={message} key={message.id} />;
            })}
          </div>
          <form onSubmit={e => this.props.onClickCreateMessage(e)}>
            <div className="ShipIt">
              <input
                type="text"
                placeholder="Type a message..."
                onChange={this.props.setMessage}
              />
            </div>
            <br />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    );
  }
}

export default MessageList;
