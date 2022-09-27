import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const EditUser = () => {
  const id = useParams();

  const [user, setUser] = useState([]);

  const Id = Number(id.id)

  //axios para hacer pedido de datos  
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/user/edituser/${Id}`)
      .then((res) => setUser(res.data))
      .catch((error) => {
        console.log("error en el pedido get");
      });

  }, []);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");



  const handleChange1 = (event) => {
    setName(event.target.value)
  }
  const handleChange2 = (event) => {
    setLastname(event.target.value)
  }
  const handleChange3 = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
 
   console.log(name, lastname, email)
     //axios para actualizar valores
     axios
     .put(`http://localhost:3001/api/user/edituser/${Id}`, {name, lastname, email} , {withCredentials:true})
     .then((res) => res.data)
     .then(() => {
       window.alert("actualizado con exito!")
     })
     .catch((err) => {
       window.alert("errorrr")
     });
  }
  
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            {user.name} {user.id}
          </li>
          <input         
            name="name"
            className="name"
            type="text"
            placeholder="Nuevo nombre"    
            value={name}
            onChange={handleChange1}       
          ></input>
          <li>{user.lastname}</li>
          <input
          name="lastname"
            className="lastname"
            type="text"
            placeholder="Nuevo apellido"
            value={lastname}    
            onChange={handleChange2}          
          ></input>
          <li>{user.email}</li>
          <input        
            name="email"
            className="email"
            type="text"
            placeholder="Nuevo email"
            value={email}
            onChange={handleChange3}   
          ></input>
        </ul>
        <button class="button is-success" 
        type="submit"
        >Actualizar info</button>
      </form>
    </div>
  );
};

export default EditUser;
