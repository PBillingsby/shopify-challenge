import React from "react";
import NominationCard from "./NominationCard";
const Nominations = props => {
  return (
    <div>
      <h4 className="text-center">Nominations: {props.nominations.length}</h4>
      <ul className="list-group">
        {props.nominations.map(nomination => {
          return <NominationCard {...props} film={nomination} />;
        })}
      </ul>
    </div>
  );
};

export default Nominations;
