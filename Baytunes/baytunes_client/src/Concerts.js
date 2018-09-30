import React from "react";
import ConcertsList from "./ConcertsList.js";

class Concerts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      concerts: []
    };
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

  render() {
    return (
      <div>
        <h1>San Francisco Concerts </h1>
        <ConcertsList concerts={this.state.concerts} />
      </div>
    );
  }
}

export default Concerts;
