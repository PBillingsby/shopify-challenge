import React from "react";

const NominationCard = props => {
  const film = props.film;
  return (
    <li className="list-group-item">
      <p>{film.Title}</p>
      <input
        type="button"
        onClick={() => props.removeNomination(film)}
        value="Remove"
      />
    </li>
  );
};

export default NominationCard;
