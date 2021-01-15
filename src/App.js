import React from "react";
import { connect } from "react-redux";

import Form from "./Form";
import StoreFilms from "./StoreFilms";
import Nominations from "./Nominations";
import * as filmActions from "./films";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App container mx-auto">
        {this.props.nominations.length === 5 ? (
          <div class="jumbotron">
            <h1>NOMINATIONS SUBMITTED!</h1>
          </div>
        ) : (
          <p></p>
        )}
        <h3>Film Finder</h3>
        <Form {...this.props} />
        <div className="mx-auto m-4 pt-3 row">
          <div className="col m-2 border w-75 border-dark">
            <StoreFilms {...this.props} />
          </div>
          <div className="col-sm m-2 w-25 border border-dark">
            <Nominations {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, filmActions)(App);
