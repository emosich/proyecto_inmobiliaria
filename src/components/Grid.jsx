//import GridItem from "./GridItem/GridItem";
import React, { useEffect, useState } from "react";
import classes from "./GridItem/GridItem.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Grid = () => {
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/property/admprops").then((res) => {
      setPropiedades(res.data);
    });
  }, []);
  if (!propiedades) return null;

  console.log(propiedades);

  return (
    <div>
      {propiedades?.map((propi, i) => {
        return (
          <div className="columns is-6" key={i}>
            <div className="column">
            <Link to={`/singleproperty/${propi.id}`}>
              <div className="box" id={classes.box} >
                <div className="card-image block">
                  <figure className="image is-4by3">
                    <img
                      src={propi.images}
                      alt="Placeholder image"
                      id="padin"
                    />
                  </figure>
                </div>
                <div className="content is-normal">
                  <h4>U$S {propi.price}</h4>
                  <p>{propi.name}</p>
                  <h6>{propi.type}</h6>
                </div>
              </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>

    /*     <div className="block">
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
    </div> */
  );
};

export default Grid;
