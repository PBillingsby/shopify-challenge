import React from "react";
import NominationCard from "./NominationCard";
const Nominations = props => {
  return (
    <div>
      <h4 className="text-center mt-1">
        Nominations: {props.nominations.length}
      </h4>
      <ol className="list-group">
        {props.nominations.map(nomination => {
          return <NominationCard {...props} film={nomination} />;
        })}
      </ol>
    </div>
  );
};

export default Nominations;
