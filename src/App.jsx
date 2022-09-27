import React from 'react'
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LogOut from './pages/LogOut';
import "bulma/css/bulma.css";
import SingleProperty from "./components/SingleProperty/SingleProperty";
import Footer from "./components/Footer/Footer";
import Grid from "./components/Grid";
import Admin from "./pages/Admin/Admin";
import ContentUsers from "./components/ContentUsers";
import ContentPropi from "./components/ContentPropi";
import { useState, useEffect } from "react";
import axios from "axios";
import EditUser from "./pages/EditUser";
import Register from "./pages/Register"; 
import MyAccount from './pages/MyAccount/MyAccount';
import GridItem from './components/GridItem/GridItem';
import ListaDeUsuariosRedux from './ListaDeUsuariosRedux';




const App = () => {
 
  const [usersList, setUsersList] = useState([]);
  const [propsList, setPropsList] = useState([]);



/*   useEffect(() => {
    //que se actualice cuando elimino un usuario (handle)
    axios
      .get("http://localhost:3001/api/user/admusers")
      .then((res) => setUsersList(res.data))

      .catch((error) => {
        console.log("errorrrrrrrr");
      });
  }, []); */

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/property/admprops")
      .then((res) => setPropsList(res.data))

      .catch((error) => {
        console.log("errorrrrrrrr");
      });
  }, []);


  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Grid />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<LogOut />} />
      <Route path="/ContentUsers" element={<ContentUsers usersList={usersList} />}/>
      <Route path="/ContentPropi" element={<ContentPropi propsList={propsList} />}/>
      <Route path="/edituser/:id" element={<EditUser />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/myaccount" element={<MyAccount/>} />
      <Route path="/singleproperty/:id" element={<SingleProperty/>} />
      <Route path="/redux" element={<ListaDeUsuariosRedux/>} />
    </Routes>
   {/*  <Footer /> */}
    </div>
  )
}

export default App;