import React from "react";
import "./Landing.css";
import Equalizer from "./Equalizer";

const Landing = () => {
  return (
    <div className="landing">
      <h1 className="landing-header"> Find Live Music in San Francisco </h1>
      <div className="landing-body">
        <form>
          <button formAction="/concerts">Get Music</button>
        </form>
        <Equalizer />
      </div>
    </div>
  );
};

export default Landing;
