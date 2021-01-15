import React from "react";
import NominationCard from "./NominationCard";
const Nominations = props => {
  return (
    <div>
      <h4 className="text-center">Nominations</h4>
      <ol className="list-group">
        {props.nominations.map(nomination => {
          return <NominationCard {...props} film={nomination} />;
        })}
      </ol>
    </div>
  );
};

export default Nominations;
