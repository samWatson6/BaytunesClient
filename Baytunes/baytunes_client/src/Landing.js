import React from "react";
import Header from "./Header";
import "./Landing.css";
import Equalizer from "./Equalizer";

const Landing = () => {
  return (
    <div className="landing">
      <Header />
      <div className="landing-body">
        <h1 className="landing-header"> Find Live Music in San Francisco </h1>
        <button> Find Music </button>
        <Equalizer />
      </div>
    </div>
  );
};

export default Landing;
