import React, { Component } from "react";

const String = (props) => {
  return (
    <React.Fragment>
      <line
        x1="0"
        y1={props.y}
        x2={props.width}
        y2={props.y}
        stroke="black"
        strokeWidth={props.thick}
      />
      <line
        x1="0"
        y1={props.y}
        x2={props.width / 2}
        y2={props.y}
        stroke="transparent"
        strokeWidth={props.gap}
      />
      <line
        x1={props.width / 2}
        y1={props.y}
        x2={props.width}
        y2={props.y}
        stroke="transparent"
        strokeWidth={props.gap}
      />
    </React.Fragment>
  );
};

export default String;
