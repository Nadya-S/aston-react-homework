import React from "react";
import "./Greeting.css";

class Greeting extends React.Component {
  render() {
    return (
      <>
        <h3 className="greeting">Hello {this.props.name}!</h3>
        <h4>{this.props.framework} is good framework</h4>
      </>
    );
  }
}

export default Greeting;
