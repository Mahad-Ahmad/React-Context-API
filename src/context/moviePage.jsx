import React, { Component } from "react";
import Movielist from "./movieList";
import UserContext from "./userContext";

class Moviepage extends Component {
  render() {
    return (
      <div>
        <Movielist />
      </div>
    );
  }
}

export default Moviepage;
