import React from "react";

const NominationCard = props => {
  return (
    <li>
      <p>{props.film.Title}</p>
      <input
        type="button"
        onClick={() => props.removeNomination(props.film)}
        value="Remove"
      />
    </li>
  );
};

export default NominationCard;
