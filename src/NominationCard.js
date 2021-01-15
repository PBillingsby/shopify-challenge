import React from "react";

const NominationCard = props => {
  const film = props.film;
  return (
    <li className="list-group-item">
      <span className="d-inline-flex">
        <h5>{film.Title}</h5>
        <input
          type="button"
          class="close ml-2"
          onClick={() => props.removeNomination(film)}
          value="&times;"
        />
      </span>
    </li>
  );
};

export default NominationCard;
