import React from "react";

class DateIcon extends React.Component {
  render(props) {
    let formatMonth = date => {
      let months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ];
      let monthNumString = date.split("-")[1];
      let monthIndex = parseInt(monthNumString, 10);
      let month = months[monthIndex - 1];
      return month;
    };
    let formatDay = date => {
      let day = parseInt(date.split("-")[2].split("T")[0], 10);
      return day;
    };
    return (
      <div id="event_date">
        <div id="date_month">{formatMonth(this.props.date)}</div>
        <div id="date_day">{formatDay(this.props.date)}</div>
      </div>
    );
  }
}

export default DateIcon;
