import React, { Component } from "react";
import MovieRow from "./movieRow";
import UserContext from "./userContext";

class Movielist extends Component {
  componentDidMount() {
    // console.log("context", this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div className="m-3">
            Movie List{" "}
            {userContext.currentUser ? userContext.currentUser.name : ""}
            <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

Movielist.contextType = UserContext;

export default Movielist;
