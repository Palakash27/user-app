import React, { Component } from "react";
import { Link } from "react-router-dom";

export class User extends Component {
  render() {
    return (
      <li style={userListStyle}>
        <Link
          to={`/user-app/user/${this.props.user.id}`}
          style={{ color: "inherit" }}
        >
          <div style={userStyle}>
            <b>{this.props.user.name}</b>
            <br />
            <b>@ </b>
            <i>{this.props.user.username}</i>
            <br />
            Works at <b>{this.props.user.company.name}</b>
            <br />
            <u>{this.props.user.email}</u>
            <br />
          </div>
        </Link>
      </li>
    );
  }
}
const userListStyle = {
  padding: "0px 25px 25px 25px",
  backgroundColor: "white",
  textColor: "black",
  fontSize: 20
};

const userStyle = {
  boxShadow: "10px 10px 18px grey",
  padding: 20,
  backgroundColor: "rgb(236, 232, 232)"
};

export default User;
