import React, { Component } from "react";

class Chord extends Component {
  state = {
    height: 256,
    width: 256,
    margin: 28,
    gap: 40,
  };
  render() {
    return (
      <svg
        style={{ background: "white" }}
        height="512"
        viewBox={`0 0 ${this.state.height} ${this.state.width}`}
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
        <circle
          cx={this.state.width / 2}
          cy={this.state.margin}
          r="20"
          fill="white"
          strokeWidth="4"
          stroke="black"
        />
        <text
          x={this.state.width / 2}
          y={this.state.margin}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="24"
        >
          {" "}
          2{" "}
        </text>
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
      </svg>
    );
  }
}

export default Chord;
