import React from "react";

const NominationCard = props => {
  const film = props.film;
  return (
    <li className="list-group-item">
      <span className="d-inline-flex">
        <h5>{film.Title}</h5>
        <a href="#" class="pl-2" onClick={() => props.removeNomination(film)}>
          &times;
        </a>
      </span>
    </li>
  );
};

export default NominationCard;
