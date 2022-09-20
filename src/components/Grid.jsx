import React from "react";
import GridItem from "./GridItem/GridItem";

const Grid = () => {
  return (
    <div className="block">
      <div className="columns is-0">
      <div className="column"></div>
        <div className="column"><GridItem /></div>
        <div className="column"><GridItem /></div>
        <div className="column"><GridItem /></div>
        <div className="column"><GridItem /></div>
        <div className="column"></div>
      </div>
      <div className="columns is-0">
      <div className="column"></div>
        <div className="column"><GridItem /></div>
        <div className="column"><GridItem /></div>
        <div className="column"><GridItem /></div>
        <div className="column"><GridItem /></div>
        <div className="column"></div>
      </div>
      <div className="columns is-0">
      <div className="column"></div>
        <div className="column"><GridItem /></div>
        <div className="column"><GridItem /></div>
        <div className="column"><GridItem /></div>
        <div className="column"><GridItem /></div>
        <div className="column"></div>
      </div>
    </div>
  );
};

export default Grid;
