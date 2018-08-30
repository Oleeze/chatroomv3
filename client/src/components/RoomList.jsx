import React, { Component } from "react";
import Room from "./Room.jsx";
import axios from "axios";

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Rooms: []
    };
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
  render() {
    return (
      <div>
        <h4> THis is the Room</h4>
        {this.state.Rooms.map(room => (
          <Room room={room} key={room.id} />
        ))}
      </div>
    );
  }
}

export default RoomList;
