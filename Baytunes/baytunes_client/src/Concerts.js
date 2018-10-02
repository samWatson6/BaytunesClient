import React from "react";
import ConcertsList from "./ConcertsList.js";
import Calendar from "./Calendar.js";

class Concerts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      concerts: []
    };
    this.changeDate = this.changeDate.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3001/concerts")
      .then(response => response.json())
      .then(data => {
        let events = JSON.parse(data.body);
        this.setState({
          concerts: events.events
        });
      });
  }

  changeDate = (startDate, endDate) => {
    var url = new URL("http://localhost:3001/concerts"),
      params = { startDate: startDate, endDate: endDate };
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let events = JSON.parse(data.body);
        this.setState({
          concerts: events.events
        });
      });
  };

  render() {
    return (
      <div>
        <h1>San Francisco Concerts </h1>
        <ConcertsList concerts={this.state.concerts} />
        <div className="calendar-wrapper">
          <Calendar changeDate={this.changeDate.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Concerts;
