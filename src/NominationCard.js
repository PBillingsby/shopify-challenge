import React from "react";

const NominationCard = props => {
  const film = props.film;
  debugger;
  return (
    <li className="list-group-item bg-grey">
      <span className="d-inline-flex">
        <h5>
          {props.index}. {film.Title}
        </h5>
        <a href="#" class="pl-2" onClick={() => props.removeNomination(film)}>
          &times;
        </a>
      </span>
    </li>
  );
};

export default NominationCard;
