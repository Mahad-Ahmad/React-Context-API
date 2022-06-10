import React, { Component } from "react";
import withToolTip from "./withToolTip";

class Movie extends Component {
  render() {
    return (
      <>
        <h1>
          Hello World
          {this.props.showToolTip && <div>ToolTip</div>}
        </h1>
      </>
    );
  }
}

export default withToolTip(Movie);
