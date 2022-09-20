import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";


const EditUser = () => {
const id = useParams();

const [user, setUser] = useState([]);

//axios para hacer pedido de datos y despues otro axios para actualizar/editar valores
useEffect(() => {
    axios
      .get(`http://localhost:3001/api/user/edituser/${id.id}`)
      .then((res) => setUser(res.data))
      .catch((error) => {
        console.log("errorrrrrrrr");
      });
  }, []);


  return (
    <div>
      <ul>
        <li>{user.name}</li>
        <input className="input" type="text" placeholder="Nuevo nombre"></input>
        <li>{user.lastname}</li>
        <input className="input" type="text" placeholder="Nuevo apellido"></input>
        <li>{user.email}</li>
        <input className="input" type="text" placeholder="Nuevo email"></input> 
        <li>{user.is_admin}</li>
      </ul>
      <button class="button is-success">Actualizar info</button>
    </div>
  );
};

export default EditUser;
