import Logo from "./Logo"
import Nav from "./Navbar/Nav"
import '../styles/header.css'



function Header() {
    return (<div className="lmj-header">
        <Logo />
        <Nav />
    </div>
      
    );
    
        
    }
    export default Header
  



/* function Header {
    const nav = 'Accueil'
    return <li className="Accueil" ></li>
        <li className= "A propos"></li>
     
    } */

