import React, { Component } from "react";
import Chord from "./chord";

class Song extends Component {
  state = {
    chords: [
      [
        { string: 0, finger: 0 },
        { string: 1, finger: 1 },
      ],
    ],
  };

  addChord = () => {
    this.setState((prev) => ({ chords: [...prev.chords, []] }));
  };

  render() {
    return (
      <React.Fragment>
        {this.state.chords.map((chord, index) => {
          return <Chord key={index} strings={chord} />;
          console.log(chord);
        })}
        <button onClick={this.addChord}>Add chord</button>
      </React.Fragment>
    );
  }
}

export default Song;
