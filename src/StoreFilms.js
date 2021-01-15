import React from "react";
import Card from "./Card";
const StoreFilms = props => {
  if (props.film.length > 0) {
    return (
      <div>
        <Card {...props} film={props.film} />
      </div>
    );
  } else {
    return <div className="mt-2">No Results</div>;
  }
};

export default StoreFilms;
