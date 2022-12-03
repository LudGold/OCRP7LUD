import { Link } from 'react-router-dom'
 
function HeaderLink() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">apropos</Link>
            
        </nav>
    )
}

export default HeaderLink;
