import React, { Component } from "react";
import User from "./User";

export class UserList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(user => (
            <User key={user.id} user={user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
