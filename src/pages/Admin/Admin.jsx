import React from "react";
import classes from "./Admin.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ContentUsers from "../../components/ContentUsers";
import { useNavigate } from "react-router";

const Admin = () => {
  const navigate = useNavigate();

  const handleClickUsers = () => {
    console.log("Hubo un click", );
    setTimeout(() => navigate("/ContentUsers"), 100);
  };
  const handleClickPropi = () => {
    console.log("Hubo un click", );
    setTimeout(() => navigate("/Contentpropi"), 100);
  };

  return (
    <div className="columns is-multiline is-mobile is-gapless">
      <div className="column is-one-quarter">
      <aside className="menu column is-one-quarter">
        
          <ul>
          <li onClick={handleClickPropi}><a>Propiedades</a></li>
          <li onClick={handleClickUsers}><a>Usuarios</a></li>
          </ul>
        
      </aside>
      </div>
      <div className="column">
        <div className="box" id={classes.largo2}>
        
        </div>
      </div>
    </div>
  );
};

export default Admin;
