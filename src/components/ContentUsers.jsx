import React from "react";
import { useNavigate } from "react-router";
import classes from "../pages/Admin/Admin.module.css";
import { Link } from "react-router-dom";
import { modalClasses } from "@mui/material";
import { useState } from "react";
import EditUser from "../pages/EditUser";

const ContentUsers = ({ usersList }) => {
  const navigate = useNavigate();

  const handleClickUsers = () => {
    console.log("Hubo un click");
    setTimeout(() => navigate("/ContentUsers"), 100);
  };
  const handleClickPropi = () => {
    console.log("Hubo un click");
    setTimeout(() => navigate("/ContentPropi"), 100);
  };
  //////
  //modal
  const [modal, setModal] = useState(false);

  //////

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
            <strong>LOS USUARIOS SON:</strong>
            {usersList?.map((user, i) => {
              return (
                <>
                  <li key={i}>
                    {user.name} {user.lastname} <strong>{user.email}</strong>{" "}
                    <Link to={`/edituser/${user.id}`} key={i}>
                      Editar
                    </Link>
                    <Link to="/">Eliminar</Link>
                    
                  </li>

                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentUsers;
