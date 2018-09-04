import React, { Component } from "react";
import axios from "axios";
import RoomList from "./RoomList.jsx";
import MessageList from "./MessageList.jsx";
import io from "socket.io-client";
const socket = io("http://localhost:8080");

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

  //Grabs all of the Rooms on inital loading
  componentDidMount() {
    this.getRooms();
  }

  //Grabs rooms
  getRooms() {
    let self = this;
    axios.get("/rooms").then(response => {
      self.setState({ Rooms: response.data });
    });
  }

  //Grabs all messages depending on room
  getMessages() {
    let self = this;
    console.log(self.state.RoomId);
    axios
      .get("/messages", { params: { roomId: self.state.RoomId } })
      .then(response => {
        self.setState({ Messages: response.data });
      });
  }

  //Creates state of room that will be created
  setRoom(e) {
    this.setState({ Room: e.target.value });
  }

  //Creates state of message that will be created
  setMessage(e) {
    this.setState({ Message: e.target.value });
  }

  //Creates state of room ID and the grabs all messages based on room
  onClickGetMessages(e) {
    this.setState({ RoomId: e }, () => {
      this.getMessages();
    });
  }

  //Creates Room
  onClickCreateRoom(e) {
    e.preventDefault();
    socket.emit("createRoom", { name: this.state.Room });
  }

  //Creates Message
  onClickCreateMessage(e) {
    e.preventDefault();
    socket.emit("createMessage", {
      message: this.state.Message,
      roomId: this.state.RoomId,
      userId: this.state.UserId
    });
  }

  render() {
    //Will run when room is created
    socket.on("getRooms", () => {
      this.getRooms();
    });
    //Will run when message is created
    socket.on("getMessages", () => {
      this.getMessages();
    });
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
