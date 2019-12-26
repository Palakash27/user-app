import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import UserList from "./UserList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserCard from "./UserCard";

export class App extends Component {
  state = {
    users: []
    // images: []
  };
  componentDidMount() {
    //fetching users
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));

    // //fetching profile images
    // fetch(
    //   "https://api.unsplash.com/search/photos?query=person&client_id=f0f8d780dab3e908e61236e22f52af9957384ddc8cefd5b64ebca443f9e41d66"
    // )
    //   .then(res => res.json())
    //   .then(data =>
    //     this.setState({ images: data.results.map(image => image.urls.regular) })
    //   );
  }
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/user-app/user/:id" Component={UserCard}>
            <UserCard />
          </Route>
          <Route path="/user-app/">
            <UserList users={this.state.users} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
