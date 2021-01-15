import React from "react";
import { connect } from "react-redux";

import Form from "./Form";
import StoreFilms from "./StoreFilms";
import * as filmActions from "./films";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App container mx-auto">
        Find Film
        <Form {...this.props} />
        <div className="mx-auto m-4 pt-3 row">
          <div className="col-md m-2 border border-dark">
            <StoreFilms {...this.props} />
          </div>
          <div className="col-sm m-2 border border-dark">
            {this.props.nominations.map(nomination => {
              <div>
                <h5>{nomination.Title}</h5>
              </div>;
            })}
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
