import React from "react";
import Card from "./Card";
const StoreFilms = props => {
  if (props.films.length > 0) {
    return (
      <div id="results">
        <h4 className="text-center">Results</h4>
        {props.films.map(film => {
          return <Card {...props} film={film} />;
        })}
      </div>
    );
  } else {
    return <div className="mt-2">Search for results</div>;
  }
};

export default StoreFilms;
