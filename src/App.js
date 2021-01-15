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
      <div className="App container mt-5 pt-1 mx-auto">
        {this.props.nominations.length === 5 ? (
          <div class="jumbotron">
            <div class="nomination-text">
              <h1 class="nomination-h1 jumbotron-text">
                NOMINATIONS SUBMITTED!!!
              </h1>
              <ul className="list-group w-50 mx-auto">
                {this.props.nominations.map(nomination => (
                  <li
                    class="list-group-item"
                    style={{
                      color: "white",
                      backgroundColor: "rgb(0, 0, 0, .7)"
                    }}
                  >
                    {nomination.Title}
                  </li>
                ))}
              </ul>
              <button onClick={this.props.startOver}>Start over</button>
            </div>
          </div>
        ) : (
          <div>
            <h3>Film Finder</h3>
            <Form {...this.props} />
            <div className="mx-auto m-4 pt-3 row">
              <div className="col m-2 border w-75 border-dark">
                <StoreFilms {...this.props} />
              </div>
              <div className="col-sm pt-1 m-2 w-25 border border-dark">
                <Nominations {...this.props} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, filmActions)(App);
