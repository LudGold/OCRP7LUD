import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Collapse from "../components/Collapse";

export default function About() {
  return (
    <div className="about_page">
      <Header />

      <div className="about_desk">
        <img src="banner_about_desk.png" alt="" className="about_banner_home" />
      </div>
      <div className="about_mob">
        <img
          src="banner_about_mobile.png"
          alt=""
          className="about_banner_mob"
        />
      </div>

      <div className="about_container">
        <Collapse
          title="Fiabilité"
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. 
             Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />

        <Collapse
          title="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. 
             Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
              N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Collapse
          title="Sécurité"
          description="La sécurité est la priorité de Kasa. 
             Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
             En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
      <Footer />
    </div>
  );
}
