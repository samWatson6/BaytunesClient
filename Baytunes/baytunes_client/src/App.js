import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Landing.js";
import SpotifyReccommendation from "./SpotifyReccomendations.js";
import Header from "./Header.js";
import Concerts from "./Concerts.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route
              exact
              path="/concerts/user"
              component={SpotifyReccommendation}
            />
            <Route exact path="/concerts" component={Concerts} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
