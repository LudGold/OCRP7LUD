import React from 'react'
import '../../styles/header.css' 
import { NavLink } from 'react-router-dom';



function Header() {
  return (
      <section className="container_header">
        <div className="header">
            {/* utiliser navlink pour savoir si c'est actif ou non 
            <NavLink
          className={({ isActive }) =>
            isActive ? "nav_link active" : "nav_link"
          }
          to="/about"
        >
          À Propos
        </NavLink> */}
            <nav className='lmj-nav'>
                <img className="lmj-logo-kasa" src="/kasa-logo.png"  alt="logo Kasa"></img>
                <ul>
                    <li>
                    <NavLink to="/" className="accueil">Accueil</NavLink>
                    </li>
                    <li>
                    <NavLink to="/about" className="about">A propos</NavLink>
                    </li>
                </ul>
            </nav>
        
       
        
      </div>
      </section>
      
    );
            
    }
    export default Header
  


