import React, { Component } from "react";
import Message from "./Message.jsx";

class MessageList extends Component {
  render() {
    return (
      <div>
        <h4>Message List</h4>
        <div>
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
    );
  }
}

export default MessageList;
