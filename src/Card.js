import React from "react";
import NominationButton from "./NominationButton";
const Card = props => {
  const film = props.film;
  return (
    <div
      className="card border border-dark p-1 m-2 mx-auto align-items-stretch"
      style={{ width: "25rem", maxHeight: "35rem" }}
    >
      {film.Poster !== "N/A" && (
        <img
          className="card-img-top mx-auto"
          style={{ width: "50%" }}
          src={film.Poster}
        />
      )}
      <span className="d-inline">
        <h4>{film.Title}</h4>
        <ul style={{ listStyle: "none", paddingLeft: "0" }}>
          <li>Release date: {film.Year}</li>
          <li>Runtime: {film.Runtime}</li>
        </ul>
      </span>
      <NominationButton {...props} />
    </div>
  );
};

export default Card;
