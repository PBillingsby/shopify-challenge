import React from "react";

const Card = props => {
  debugger;
  return (
    <div className="card border border-dark mt-2 ">
      <div className="card-img-top">
        <img src={film.Poster} />
      </div>
      <p>{film.Title}</p>
      <p>{film.Year}</p>
      <input
        type="button"
        onClick={() => props.addNomination(film)}
        value="Nominate"
      />
    </div>
  );
};

export default Card;
