import React from "react";
import { useNavigate } from "react-router";
import classes from "../pages/Admin/Admin.module.css";

const ContentPropi = ({ propsList }) => {
  const navigate = useNavigate();

  const handleClickUsers = () => {
    console.log("Hubo un click");
    setTimeout(() => navigate("/ContentUsers"), 100);
  };
  const handleClickPropi = () => {
    console.log("Hubo un click");
    setTimeout(() => navigate("/ContentPropi"), 100);
  };

  return (
    <div className="columns is-multiline is-mobile is-gapless">
      <div className="column is-one-quarter">
        <aside className="menu column is-one-quarter">
          <ul>
            <li onClick={handleClickPropi}>
              <a>Propiedades</a>
            </li>
            <li onClick={handleClickUsers}>
              <a>Usuarios</a>
            </li>
          </ul>
        </aside>
      </div>
      <div className="column">
        <div className="box" id={classes.largo2}>
          <ul>
            <strong>LAS PROPIEDADES SON:</strong>
            {propsList?.map((prop) => {
              return (
                <li key={prop.id}>
                  {prop.name} <strong>U$S{prop.price} </strong>
                </li>
              );
            })}
          </ul>
          <button class="button is-success">Crear nueva</button>
        </div>
      </div>
    </div>
  );
};

export default ContentPropi;
