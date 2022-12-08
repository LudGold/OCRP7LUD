import React from 'react'
import '../../styles/header.css' 
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            <nav className='lmj-nav'>
                <img className="lmj-logo-kasa" src="kasa-logo.png"  alt="logo Kasa"></img>
                <ul>
                    <li>
                    <Link to="/" className="accueil">Accueil</Link>
                    </li>
                    <li>
                    <Link to="/about" className="about">A propos</Link>
                    </li>
                </ul>
            </nav>
        
       
        
    </div>
      
    );
            
    }
    export default Header
  


