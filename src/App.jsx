import React from 'react'
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register"
import Login from "./pages/Login";
import LogOut from './pages/LogOut';
import { useSelector } from 'react-redux';

const App = () => {
  const reducerState = useSelector(state => state.ejemploSlice)
 

  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<LogOut />} />
    </Routes>
    </div>
  )
}

export default App