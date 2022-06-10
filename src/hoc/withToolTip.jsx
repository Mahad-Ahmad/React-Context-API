import React from "react";

function withToolTip(Component) {
  return class WithToolTip extends React.Component {
    state = { showToolTip: false };

    MouseOver = () => this.setState({ showToolTip: true });

    MouseOut = () => this.setState({ showToolTip: false });

    render() {
      return (
        <>
          <div onMouseOver={this.MouseOver} onMouseOut={this.MouseOut}>
            <Component {...this.props} showToolTip={this.state.showToolTip} />
          </div>
        </>
      );
    }
  };
}

export default withToolTip;
