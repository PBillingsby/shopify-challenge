import React from "react";
import NominationButton from "./NominationButton";
const Card = props => {
  // const filterNomination = film => {
  //   if (!props.nominations.some(nom => nom === film)) {
  //     props.addNomination(film);
  //   }
  // };
  return (
    <div className="card border border-dark p-3 mt-2 ">
      <div className="card-img-top">
        <img src={props.film.Poster} />
      </div>
      <span className="d-inline">
        <h4>{props.film.Title}</h4> - <p>{props.film.Year}</p>
      </span>
      <NominationButton {...props} />
    </div>
  );
};

export default Card;
