import React, { Component } from "react";
import axios from "axios";
import RoomList from "./RoomList.jsx";
import MessageList from "./MessageList.jsx";
import io from "socket.io-client";
const socket = io("http://localhost:8080");
import "./Lobby.scss";
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
      CurrentRoom: ""
    };
    this.onClickGetMessages = this.onClickGetMessages.bind(this);
    this.onClickCreateRoom = this.onClickCreateRoom.bind(this);
    this.onClickCreateMessage = this.onClickCreateMessage.bind(this);
    this.setRoom = this.setRoom.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.hideRoomList = this.hideRoomList.bind(this);
  }

  //Grabs all of the Rooms on inital loading
  componentDidMount() {
    this.getRooms();
  }

  //Grabs rooms
  getRooms() {
    let self = this;
    axios.get("/rooms").then(response => {
      console.log(response.data);
      self.setState({ Rooms: response.data });
      self.setState({ CurrentRoom: this.state.Rooms[0].name });
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

  hideRoomList() {
    this.setState({ RoomListStyle: !this.state.RoomListStyle });
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
        <LobbyHeader hideRoomList={this.hideRoomList} />
        <div className="Current">
          <h3>Current Lobby: {this.state.CurrentRoom}</h3>
        </div>
        <RoomList
          Room={this.state.Room}
          Rooms={this.state.Rooms}
          setRoom={this.setRoom}
          onClickGetMessages={this.onClickGetMessages}
          onClickCreateRoom={this.onClickCreateRoom}
          RoomListStyle={this.state.RoomListStyle}
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

export default Lobby;
