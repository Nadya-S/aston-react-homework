import React from "react";
import "./Form.css";
import Greeting from "../Greeting/Greeting";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.state = { name: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ name: this.name.current.value });
    console.log("submit", this.name.current.value, this.state);
  };

  componentDidMount() {
    console.log("component did mount");
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    const { name } = this.state;
    return (
      <section className="form-container">
        <h2 className="form_title">Welcome form</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="name"
            ref={this.name}
            className="form_input"
          ></input>
          <button className="form_button" type="submit">
            Отправить
          </button>
        </form>
        {name ? <Greeting name={name} /> : <div></div>}
      </section>
    );
  }
}

export default Form;
