import React from "react";
import "./Form.css";
import Greeting from "../Greeting/Greeting";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.state = { name: "", framework: "", error: false };
  }

  handleChange = (e) => {
    this.setState({ framework: e.target.value });
    this.handleError(e.target.value);
  };

  handleError = (value) => {
    if (value === "react" || value === "реакт") {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ name: this.name.current.value });
  };

  focusInput = () => {
    this.name.current.focus();
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
    const { name, framework, error } = this.state;

    return (
      <section className="form-container">
        <h2 className="form__title">Welcome form</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="button"
            value="focus"
            className="form__input"
            onClick={this.focusInput}
          ></input>
          <p className="form__input_title">What is your name?</p>
          <input
            name="name"
            type="text"
            placeholder="name"
            ref={this.name}
            className="form__input"
            required
          ></input>
          <p className="form__input_title">What framework are you learning?</p>
          <input
            name="framework"
            type="text"
            placeholder="framework"
            value={this.framework}
            onChange={this.handleChange}
            className="form__input"
            required
          ></input>
          <span
            className={error ? "form__input_error_active" : "form__input_error"}
          >
            React is not a framework. It is a library.
          </span>
          <button className="form__button" type="submit" disabled={error}>
            Отправить
          </button>
        </form>
        {name ? <Greeting name={name} framework={framework} /> : <div></div>}
      </section>
    );
  }
}

export default Form;
