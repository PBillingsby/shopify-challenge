import React from "react";

const NominationButton = props => {
  const filterNomination = film => {
    if (!props.nominations.some(nom => nom === film)) {
      props.addNomination(film);
    }
  };

  if (!props.nominations.some(nom => nom === props.film)) {
    return (
      <input
        type="button"
        onClick={() => filterNomination(props.film)}
        value="Nominate"
      />
    );
  } else {
    return (
      <div>
        <p className="text-success">Nominated</p>
      </div>
    );
  }
};

export default NominationButton;
