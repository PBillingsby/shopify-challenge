import React from "react";

const NominationButton = props => {
  const filterNomination = film => {
    if (!props.nominations.some(nom => nom === film)) {
      props.addNomination(...film);
    }
  };
  console.log("noms", props.nominations);
  console.log("Film", props.film[0]);
  if (!props.nominations.some(nom => nom === props.film[0])) {
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
