import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About'; 
import Erreur from './pages/Error';
/* import Card from './pages/Card' */;

export default function Router() {
  return (
       
    <div className="Routes" >
         
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/logement/:id" element={<Card />} /> */}
        <Route path="/about" element={<About />} /> 
        <Route path="*" element={<Erreur />} />

      </Routes>
    
    </div>
  );
  } 
