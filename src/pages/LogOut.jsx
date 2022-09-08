import React from 'react';
import axios from "axios";

const LogOut = () => {
    const handleClick = (event) => {
        event.preventDefault();
        axios
    .post("http://localhost:3001/api/user/logout", {withCredentials:false})
    .catch((err) => console.log("errorrrrr", err));

    }



  return (
    <div>
        <button onClick={handleClick} >LOGOUT</button>
    </div>
  )
}

export default LogOut