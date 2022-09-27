import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import classes from "./SingleProperty.module.css";

const SingleProperty = () => {

  const id = useParams();

  const [property, setProperty] = useState([]);
  
  const Id = Number(id.id)

  //axios para hacer pedido de datos  
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/property/singleproperty/${Id}`)
      .then((res) => setProperty(res.data))
      .catch((error) => {
        console.log("error en el pedido get");
      });
  }, []);
  if (!property) return null;

 

  return (
    <div class="box" id={classes.box}>
      <div class="columns is-one"></div>
      <div class="columns">
        <div class="column is-three-fifths">
          <div class="box">
            <img src={property.images}></img></div>
        </div>
        <div class="column">
          <div class="box">
            <p><strong>{property.name}</strong></p>
            <br />
            <p>{property.availability}</p>
            <br />
            <p>Operacion: {property.type}</p>
            <br />
            <p>Precio:  U$S {property.price}</p>
            <div class="box">{property.description}.</div>
          </div>
        </div>
      </div>
      <div class="box" id="image">
        <img src={property.location} ></img>
      </div>
      <div class="columns is-one"></div>
    </div>
  );
};

export default SingleProperty;
