import React from "react";
import NominationCard from "./NominationCard";
const Nominations = props => {
  return (
    <div>
      Nominations: {props.nominations.length}
      <ul>
        {props.nominations.map(nomination => {
          return <NominationCard {...props} film={nomination} />;
        })}
      </ul>
    </div>
  );
};

export default Nominations;
