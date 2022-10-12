import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom"; 
  
import Home from '../../containers/Home/Home'
import Navbar from '../../components/Navbar/Navbar';


const Routing = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routing