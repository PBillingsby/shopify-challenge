import React from "react";
import Card from "./Card";
const StoreFilms = props => {
  let films = props.films;
  if (films.length > 0) {
    return (
      <div>
        {films.map(film => (
          <Card {...film} />
        ))}
      </div>
    );
  } else {
    return <div className="mt-2">Type film name to search</div>;
  }
};

// const handleNomination = film => {
//   return dispatch => {
//     dispatch({ type: "ADD_NOMINATION", payload: film });
//   };
// };

export default StoreFilms;
