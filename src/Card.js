import React from "react";
import NominationButton from "./NominationButton";
const Card = props => {
  return (
    <div className="card border border-dark p-3 mt-2 ">
      <div className="card-img-top">
        <img src={props.film[0].Poster} />
      </div>
      <span className="d-inline">
        <h4>{props.film[0].Title}</h4> - <p>{props.film[0].Year}</p>
      </span>
      <NominationButton {...props} />
    </div>
  );
};

export default Card;
