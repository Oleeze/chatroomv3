import React, { Component } from "react";
import Message from "./Message.jsx";
import "./MessageList.scss";

class MessageList extends Component {
  render() {
    return (
      <div className="MessageListWrapper">
        <div className="MessageList">
          <div className="Message">
            {this.props.Messages.map(message => {
              return <Message message={message} key={message.id} />;
            })}
          </div>
          <form onSubmit={e => this.props.onClickCreateMessage(e)}>
            <input
              type="text"
              placeholder="Enter a message"
              onChange={this.props.setMessage}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default MessageList;
