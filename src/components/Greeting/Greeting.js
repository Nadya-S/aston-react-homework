import React from "react";
import "./Greeting.css";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log("update greeting");
  }

  render() {
    return <h3 className="greeting">Hello {this.props.name}!</h3>;
  }
}

export default Greeting;
