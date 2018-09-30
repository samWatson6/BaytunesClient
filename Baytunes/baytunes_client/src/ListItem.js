import React from "react";
import DateIcon from "./DateIcon.js";

const ListItem = props => {
  const formatTime = date => {
    let time = date.split("T")[1].slice(0, -3);
    let hour = parseInt(time.split(":")[0]); //eslint ignore
    let minute = time.split(":")[1];
    if (hour > 12) {
      hour = ((hour + 11) % 12) + 1;
      time = hour + ":" + minute + "pm";
    } else {
      time = hour + ":" + minute + "am";
    }
    return time;
  };

  return (
    <div id="event">
      <DateIcon id="event_date" date={props.event.datetime_local} />
      <h1 id="event_title">{props.event.short_title}</h1>
      <div id="event_venue">
        <a id="event_venue_url" href={props.event.venue.url}>
          {props.event.venue.name}
        </a>
      </div>
      <ul id="event_details">
        <div>
          <div id="event_time">{formatTime(props.event.datetime_local)}</div>
          <button id="event_tickets" href={props.event.url}>
            Get Tickets
          </button>
        </div>
        <div id="event_address">
          {props.event.venue.address},{" " + props.event.venue.city}
        </div>
      </ul>
      <div />
    </div>
  );
};

export default ListItem;
