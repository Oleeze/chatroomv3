import React, { Component } from "react";

class PopUp extends Component {
  render() {
    return (
      <div className="PopUpWrapper">
        <div className="PopUp">
          <h4>Enter a username</h4>
          <input type="text" placeholder="Username" />
          <input type="submit" placeholder="Submit" />
        </div>
      </div>
    );
  }
}

export default PopUp;
