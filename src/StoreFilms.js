import React from "react";

const StoreFilms = props => {
  let films = props.films;
  if (films.length > 0) {
    return (
      <div>
        {films.map(film => (
          <div className="card w-50 border border-dark">
            <div className="card-img-top h-50">
              <img src={film.Poster} />
            </div>
            <p>{film.Title}</p>
            <p>{film.Year}</p>
            <input
              type="button"
              onClick={() => handleNomination(film)}
              value="Nominate"
            />
          </div>
        ))}
      </div>
    );
  } else {
    return <div>No films found</div>;
  }
};

const handleNomination = film => {
  return dispatch => {
    dispatch({ type: "ADD_NOMINATION", payload: film });
  };
};

export default StoreFilms;
