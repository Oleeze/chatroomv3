import React, { Component } from "react";
import RoomList from "./RoomList.jsx";
import MessageList from "./MessageList.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <h4>Chatroom</h4>
        <RoomList />
        <MessageList />
      </div>
    );
  }
}

export default App;
