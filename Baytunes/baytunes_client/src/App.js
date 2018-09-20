import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Landing.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
