import React, { Component } from "react";
import axios from "axios";
import RoomList from "./RoomList.jsx";
import MessageList from "./MessageList.jsx";
import io from "socket.io-client";
const socket = io("http://localhost:8080");
import "./styles/Lobby.scss";
import LobbyHeader from "./LobbyHeader.jsx";

class Lobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Rooms: [],
      Messages: [],
      Room: "",
      Message: "",
      RoomId: 1,
      UserId: 1,
      RoomListStyle: false,
      CurrentRoom: "",
      Name: ""
    };
    this.onClickGetMessages = this.onClickGetMessages.bind(this);
    this.onClickCreateRoom = this.onClickCreateRoom.bind(this);
    this.onClickCreateMessage = this.onClickCreateMessage.bind(this);
    this.setRoom = this.setRoom.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.hideRoomList = this.hideRoomList.bind(this);
    this.hideAll = this.hideAll.bind(this);
  }

  //Grabs all of the Rooms on inital loading
  componentDidMount() {
    let name = prompt("Please enter your name:");
    this.setState({ Name: name });
    this.getRooms();
  }

  //Grabs rooms
  getRooms() {
    let self = this;
    axios
      .get("/rooms")
      .then(response => {
        self.setState({ Rooms: response.data });
        self.setState({ RoomId: this.state.Rooms[0].id });
        self.setState({ CurrentRoom: this.state.Rooms[0].name });
      })
      .then(() => this.getMessages());
  }

  //Grabs all messages depending on room
  getMessages() {
    let self = this;
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
    this.setState({ RoomId: e[0] }, () => {
      this.getMessages();
    });
    this.setState({ CurrentRoom: e[1] });
  }

  //Creates Room
  onClickCreateRoom(e) {
    e.preventDefault();
    e.target.reset();
    socket.emit("createRoom", { name: this.state.Room });
  }

  //Creates Message
  onClickCreateMessage(e) {
    e.preventDefault();
    e.target.reset();
    socket.emit("createMessage", {
      message: this.state.Message,
      roomId: this.state.RoomId,
      userId: this.state.UserId
    });
  }

  //Switches between show and hide Rooms (changes className)
  hideRoomList() {
    this.setState({ RoomListStyle: !this.state.RoomListStyle });
  }
  // hides rooms
  hideAll() {
    this.setState({ RoomListStyle: false });
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
      <div className="Body">
        <LobbyHeader hideRoomList={this.hideRoomList} Name={this.state.Name} />
        <RoomList
          Room={this.state.Room}
          Rooms={this.state.Rooms}
          setRoom={this.setRoom}
          onClickGetMessages={this.onClickGetMessages}
          onClickCreateRoom={this.onClickCreateRoom}
          RoomListStyle={this.state.RoomListStyle}
          CurrentRoom={this.state.CurrentRoom}
        />
        <MessageList
          HideRooms={this.hideAll}
          Messages={this.state.Messages}
          setMessage={this.setMessage}
          onClickCreateMessage={this.onClickCreateMessage}
        />
      </div>
    );
  }
}

export default Lobby;
