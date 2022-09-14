import React from "react";
import classes from "./GridItem.module.css";

const GridItem = () => {
  return (
    <div className="box" id={classes.box}>
      <div className="card-image block">
        <figure className="image is-4by3" >
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
            id="padin"
          />
        </figure>
      </div >
    <div className="content is-normal">
    <h4>U$S 50.000</h4>
    <p>Monoambiente 38 Mts 2 Totales</p>
    <h6>VENTA</h6>
    </div>
    
    </div>
  );
};

export default GridItem;
