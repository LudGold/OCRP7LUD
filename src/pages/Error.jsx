/* import styled from 'styled-components' */
import { Link } from 'react-router-dom';
import Header from '../components/home/Header';
import './../styles/error.css';


function Error() {
    return (
        <div>
            {<Header />}
            <img className="error" src="/404.png" alt="erreur 404"></img>
            <h1 className="error-txt">Oups! La page que vous demandez n'existe pas.</h1> 
            <li><Link to={`/`} className='returnHome'> Retourner sur la page d'accueil </Link> </li>

        </div>
    )
}
 
export default Error;