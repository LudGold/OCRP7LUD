import { Link } from "react-router-dom";
import Header from "../components/layout/Header";

function Error() {
  return (
    <div>
      {<Header />}
      <div className="Err">
        <img className="error" src="/404.png" alt="erreur 404"></img>
        <h1 className="error-txt">
          Oups! La page que vous demandez n'existe pas.
        </h1>
        <li>
          <Link to={`/`} className="returnHome">
            {" "}
            Retourner sur la page d'accueil{" "}
          </Link>{" "}
        </li>
      </div>
    </div>
  );
}

export default Error;
