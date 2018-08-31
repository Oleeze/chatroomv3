import React, { Component } from "react";
import axios from "axios";
import RoomList from "./RoomList.jsx";
import MessageList from "./MessageList.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Rooms: [],
      Messages: [],
      Room: "",
      Message: "",
      RoomId: 1,
      UserId: 1
    };
    this.onClickGetMessages = this.onClickGetMessages.bind(this);
    this.onClickCreateRoom = this.onClickCreateRoom.bind(this);
    this.onClickCreateMessage = this.onClickCreateMessage.bind(this);
    this.setRoom = this.setRoom.bind(this);
    this.setMessage = this.setMessage.bind(this);
  }

  componentDidMount() {
    let self = this;
    axios
      .get("/rooms")
      .then(function(response) {
        self.setState({ Rooms: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  setRoom(e) {
    this.setState({ Room: e.target.value });
  }

  setMessage(e) {
    this.setState({ Message: e.target.value });
  }

  onClickGetMessages(e) {
    this.setState({ RoomId: e });
    console.log(this.state.RoomId);
    let self = this;
    axios
      .get("/messages", {
        params: {
          roomId: e
        }
      })
      .then(response => {
        self.setState({ Messages: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onClickCreateRoom(e) {
    e.preventDefault();
    let self = this;
    console.log(self.state.Room);
    axios
      .post("/rooms", { name: self.state.Room })
      .then(result => {
        console.log(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  onClickCreateMessage(e) {
    e.preventDefault();
    let self = this;

    axios
      .post("/messages", {
        message: self.state.Message,
        roomId: self.state.RoomId,
        userId: self.state.UserId
      })
      .then(result => {
        console.log(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h4>Chatroom</h4>
        <RoomList
          Room={this.state.Room}
          Rooms={this.state.Rooms}
          setRoom={this.setRoom}
          onClickGetMessages={this.onClickGetMessages}
          onClickCreateRoom={this.onClickCreateRoom}
        />
        <MessageList
          Messages={this.state.Messages}
          setMessage={this.setMessage}
          onClickCreateMessage={this.onClickCreateMessage}
        />
      </div>
    );
  }
}

export default App;
