import React, { useEffect, useState } from "react";
import classes from "./GridItem.module.css";
import axios from "axios";


const GridItem = () => {

  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:3001/api/property/admprops")
    .then((res) => {
      setPropiedades(res.data);
    })
  }, []);
  if (!propiedades) return null;

  console.log(propiedades);


  return (
    <div className="box" id={classes.box}>
      <div className="card-image block">
        <figure className="image is-4by3" >
          <img
            src="https://periodico-assets.tadevel-cdn.com/60cfc22915f9b452216026e3/image.jpg"
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
