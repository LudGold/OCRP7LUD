import React from 'react'
import '../../styles/header.css' 
import { NavLink } from 'react-router-dom';



function Header() {
  return (
      <section className="container_header">
        <div className="header">
          
            
                <img className="lmj-logo-kasa" src="/kasa-logo.png"  alt="logo Kasa"></img>
                <nav className='lmj-nav'>
          <NavLink to="/" className={({ isActive }) => {
            return isActive ? "nav_link_active" : "";
          }}>Accueil</NavLink>
                  
                   
          <NavLink to="/about" className={({ isActive }) => {
            return isActive ? "nav_link_active" : "";
          }}>
            A propos
          </NavLink>
               
            </nav>
        
       
        
      </div>
      </section>
      
    );
            
    }
    export default Header
  


