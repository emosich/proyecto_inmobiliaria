import React from "react";
import { useNavigate } from "react-router";
import classes from "../pages/Admin/Admin.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from 'react-redux'
import { obtenerUsuariosAccion, eliminarUsuariosAccion } from "../redux/userDucks"

const ContentUsers = (/* { usersList } */) => {
  const dispatch = useDispatch()

  const usuarios = useSelector(store => store.usuarios.array)
  console.log(usuarios)

  const usuariosDelete = useSelector(store => store.usuariosDelete.array)

  const navigate = useNavigate();

/*   const handleClickUsers = () => {
    console.log("Hubo un click");
    setTimeout(() => navigate("/ContentUsers"), 100);
  }; */
  const handleClickPropi = () => {
    console.log("Hubo un click");
    setTimeout(() => navigate("/ContentPropi"), 100);
  };


/* const handleDelete = (id) => {
  axios
      .delete(`http://localhost:3001/api/user/edituser/${id}`)
      .then((res) => alert("usuario eliminado"))
      .catch((error) => {
        console.log("errorrrrrrrr");
      });
} */

  return (
    <div className="columns is-multiline is-mobile is-gapless">
      <div className="column is-one-quarter">
        <aside className="menu column is-one-quarter">
          <ul>
            <li onClick={handleClickPropi}>
              <a>Propiedades</a>
            </li>
            <li /* onClick={handleClickUsers} */onClick={() => dispatch(obtenerUsuariosAccion())}>
              <a>Usuarios</a>
            </li>
          </ul>
        </aside>
      </div>
      <div className="column">
        <div className="box" id={classes.largo2}>
          <ul>
            <strong>LOS USUARIOS SON:</strong>
            {usuarios?.map((user, i) => {
              return (
                <>
                  <li key={user.id}>
                    {user.name} {user.lastname} <strong>{user.email}</strong>{" "}
                    <Link to={`/edituser/${user.id}`} key={user.id}>
                      Editar
                    </Link>
                    
                    <button /* onClick={()=> {handleDelete(user.id)}} */ onClick={() => dispatch(eliminarUsuariosAccion(user.id))}>Eliminar</button>
                    
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
