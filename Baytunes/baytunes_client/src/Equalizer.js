import React from "react";
import ReactDOM from "react-dom";
import Heights from "./Heights";

class Equalizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heights: Heights
    };
  }

  componentDidMount() {
    this.createBlocksFromHeight(5, "1");
    for (var i = 1; i < this.state.heights[0].length; i++) {
      let column = i.toString();
      console.log(column);
      this.createBlocksFromHeight(this.state.heights[0][i], column);
    }
  }

  createBlocksFromHeight(height, column) {
    let id = "c" + column;
    let blocksStorage = [];
    while (height > 0) {
      height--;
      const block = <div className="block">X</div>;
      blocksStorage.push(block);
    }
    let blocks = <div> {blocksStorage} </div>;
    ReactDOM.render(blocks, document.getElementById(id));
  }

  //fluctuateHeight

  render() {
    return (
      <div className="equalizer">
        {" "}
        Equalizer
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
