import React from "react";
import classes from "./SingleProperty.module.css";

const SingleProperty = () => {
  return (
    <div class="box" id={classes.box}>
      <div class="columns is-one"></div>
      <div class="columns">
        <div class="column is-three-fifths">
          <div class="box">foto</div>
        </div>
        <div class="column">
          <div class="box">precio, titulo, algun otro dato</div>
        </div>
      </div>

      <div class="box">mapa.</div>
      <div class="box">descripcion.</div>
      <div class="columns is-one"></div>
    </div>
  );
};

export default SingleProperty;
