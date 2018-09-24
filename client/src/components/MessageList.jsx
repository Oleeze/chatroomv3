import React, { Component } from "react";
import Message from "./Message.jsx";
import "./styles/MessageList.scss";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1
    };
  }

  componentDidMount() {
    this.refs.Messages.scrollTop = this.refs.Messages.scrollHeight;
  }

  render() {
    return (
      <div
        className="OuterMessageListWrapper"
        onClick={() => this.props.HideRooms()}
      >
        <div className="Current">
          <h3>CURRENTLY: {this.props.CurrentRoom}</h3>
        </div>
        <div className="MessageListWrapper">
          <div className="MessageList">
            <div className="Messages" id="Messages" ref="Messages">
              {this.props.Messages.map(message => {
                return <Message message={message} key={message.id} />;
              })}
            </div>
            <div id="FeedBack" ref={this.props.CurrentRoom}>
              {this.props.Who}
            </div>
          </div>
          <form
            onSubmit={e => this.props.onClickCreateMessage(e)}
            id="MessageForm"
          >
            <div className="ShipIt">
              <input
                type="text"
                placeholder="Type a message..."
                onChange={this.props.setMessage}
                required
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    );
  }
}

export default MessageList;
