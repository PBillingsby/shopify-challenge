import React from "react";
import { connect } from "react-redux";

import Form from "./Form";
import StoreFilms from "./StoreFilms";
import * as filmActions from "./films";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        Find Film
        <Form {...this.props} />
        <StoreFilms {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, filmActions)(App);
