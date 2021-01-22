import React from "react";
import NominationCard from "./NominationCard";
const Nominations = props => {
  return (
    <div>
      <h4 className="text-center mt-1">
        Nominations: {props.nominations.length}
      </h4>
      <ol className="list-group">
        {props.nominations.map((nomination, index) => {
          return (
            <NominationCard {...props} index={index + 1} film={nomination} />
          );
        })}
      </ol>
    </div>
  );
};

export default Nominations;
