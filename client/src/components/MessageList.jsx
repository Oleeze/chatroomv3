import React, { Component } from "react";
import Message from "./Message.jsx";
import axios from "axios";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Messages: []
    };
  }

  componentDidMount() {
    let self = this;
    axios
      .get("/messages")
      .then(response => {
        self.setState({ Messages: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h4>Message List</h4>
        {this.state.Messages.map(message => {
          return <Message message={message} key={message.id} />;
        })}
      </div>
    );
  }
}

export default MessageList;
