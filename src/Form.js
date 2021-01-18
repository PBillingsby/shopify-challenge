import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmName: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchFilms({ name: this.state.filmName });
    this.setState({ filmName: "" });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            onChange={this.handleChange}
            name="filmName"
            placeholder="Film Name"
            value={this.state.filmName}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
