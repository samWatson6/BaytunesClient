import React from "react";

class DateIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "3",
      month: ""
    };
    this.formatDay = this.formatDay.bind(this);
    this.formatMonth = this.formatMonth.bind(this);
  }

  componentDidMount() {
    this.formatDay(this.props.date);
    this.formatMonth(this.props.date);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.date !== this.props.date) {
      this.formatDay(this.props.date);
      this.formatMonth(this.props.date);
    }
  }

  formatDay = date => {
    if (date) {
      let day = parseInt(date.split("-")[2].split("T")[0]);
      this.setState({
        day: day
      });
    }
  };

  formatMonth = date => {
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
    if (date) {
      let monthNumString = date.split("-")[1];
      let monthIndex = parseInt(monthNumString);
      let month = months[monthIndex - 1];
      this.setState({
        month: month
      });
    }
  };

  render(props) {
    return (
      <div id="event_date">
        <div id="date_month">{this.state.month}</div>
        <div id="date_day">{this.state.day}</div>
      </div>
    );
  }
}

export default DateIcon;
