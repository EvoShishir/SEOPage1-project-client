import React from "react";
import Card from "../Card/Card";
import "./Column.css";

const Column = (props) => {
  return (
    <div className="column">
      <div className="columnHeader">
        <h4>{props.heading}</h4>
        <h4>0</h4>
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Column;
