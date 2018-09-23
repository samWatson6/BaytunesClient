import React from "react";
import ReactDOM from "react-dom";
import Heights from "./Heights";

class Equalizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heights: Heights
    };
    this.createEqualizeFrame = this.createEqualizeFrame.bind(this);
  }

  componentDidMount() {
    this.runEqualizer();
  }

  runEqualizer = () => {
    let frameNumber = 0;
    setInterval(() => {
      frameNumber++;
      if (frameNumber > 20) {
        frameNumber = 0;
      }
      this.createEqualizeFrame(frameNumber);
    }, 250);
  };

  createEqualizeFrame(frameNumber) {
    for (var i = 1; i < this.state.heights[frameNumber].length; i++) {
      let column = i.toString();
      this.createBlocksFromHeight(this.state.heights[frameNumber][i], column);
    }
  }

  createBlocksFromHeight(height, column) {
    let totalHeight = height;
    let id = "c" + column;
    let blocksStorage = [];
    let heightColors = {
      0: "green",
      1: "green",
      2: "green",
      3: "green",
      4: "yellow",
      5: "yellow",
      6: "yellow",
      7: "yellow",
      8: "orange",
      9: "orange",
      10: "orange",
      11: "orange",
      12: "orange",
      13: "red",
      14: "red",
      15: "red",
      16: "red"
    };
    while (height > 0) {
      let blockStyle = {
        background: heightColors[totalHeight - height],
        color: heightColors[totalHeight - height]
      };
      const block = (
        <div className="block" style={blockStyle}>
          X
        </div>
      );
      blocksStorage.push(block);
      height--;
    }
    let blocks = <div> {blocksStorage} </div>;
    ReactDOM.render(blocks, document.getElementById(id));
  }

  //fluctuateHeight

  render() {
    return (
      <div className="equalizer">
        <div className="equalizer-container">
          <div className="column" id="c1" />
          <div className="column" id="c2" />
          <div className="column" id="c3" />
          <div className="column" id="c4" />
          <div className="column" id="c5" />
          <div className="column" id="c6" />
          <div className="column" id="c7" />
          <div className="column" id="c8" />
          <div className="column" id="c9" />
          <div className="column" id="c10" />
          <div className="column" id="c11" />
          <div className="column" id="c12" />
          <div className="column" id="c13" />
          <div className="column" id="c14" />
          <div className="column" id="c15" />
          <div className="column" id="c16" />
          <div className="column" id="c17" />
          <div className="column" id="c18" />
          <div className="column" id="c19" />
          <div className="column" id="c20" />
        </div>
      </div>
    );
  }
}

export default Equalizer;
