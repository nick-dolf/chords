import React, { Component } from "react";
import Finger from "./finger";

class Chord extends Component {
  state = {
    height: 256,
    width: 128,
    margin: 28,
    gap: 40,
  };

  render() {
    return (
      <svg
        style={{ background: "white" }}
        height="200"
        viewBox={`0 0 ${this.state.width} ${this.state.height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0"
          y="0"
          height={this.state.height}
          width={this.state.width}
          fill="none"
          strokeWidth="2"
          stroke="black"
        />
        <line
          x1="0"
          y1={this.state.margin}
          x2={this.state.width}
          y2={this.state.margin}
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1="0"
          y1={this.state.margin + this.state.gap}
          x2={this.state.width}
          y2={this.state.margin + this.state.gap}
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1="0"
          y1={this.state.margin + this.state.gap * 2}
          x2={this.state.width}
          y2={this.state.margin + this.state.gap * 2}
          stroke="black"
          strokeWidth="3"
        />
        <line
          x1="0"
          y1={this.state.margin + this.state.gap * 3}
          x2={this.state.width}
          y2={this.state.margin + this.state.gap * 3}
          stroke="black"
          strokeWidth="3"
        />
        <line
          x1="0"
          y1={this.state.margin + this.state.gap * 4}
          x2={this.state.width}
          y2={this.state.margin + this.state.gap * 4}
          stroke="black"
          strokeWidth="4"
        />
        <line
          x1="0"
          y1={this.state.margin + this.state.gap * 5}
          x2={this.state.width}
          y2={this.state.margin + this.state.gap * 5}
          stroke="black"
          strokeWidth="4"
        />

        {this.props.strings.map((string) => {
          return (
            <Finger
              key={string.string}
              x={this.state.width / 2}
              y={this.state.margin + this.state.gap * string.string}
              number={string.finger}
            />
          );
        })}
      </svg>
    );
  }
}

export default Chord;
