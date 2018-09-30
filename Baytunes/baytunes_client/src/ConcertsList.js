import React from "react";
import ListItem from "./ListItem.js";

const ConcertsList = props => {
  return (
    <div className="ConcertsList">
      {props.concerts.map((event, index) => (
        <ListItem key={index} event={event} />
      ))}
    </div>
  );
};

export default ConcertsList;
