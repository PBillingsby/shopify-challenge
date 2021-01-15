import React from "react";

const Card = props => {
  return (
    <div className="card border border-dark mt-2 ">
      <div className="card-img-top">
        <img src={props.film.Poster} />
      </div>
      <p>{props.film.Title}</p>
      <p>{props.film.Year}</p>
      <input
        type="button"
        onClick={() => props.addNomination(props.film)}
        value="Nominate"
      />
    </div>
  );
};

export default Card;
