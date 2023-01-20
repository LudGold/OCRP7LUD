import React from "react";
import "../../styles/header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <section className="container_header">
      <nav className="lmj-nav">
        <img
          className="lmj-logo-kasa"
          src="/kasa-logo.png"
          alt="logo Kasa"
        ></img>
<div className="nav-item">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? "nav_link active" : "nav_link";
          }}
        >
          Accueil
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => {
            return isActive ? "nav_link active" : "nav_link";
          }}
        >
          A Propos
          </NavLink>
          </div>
      </nav>
    </section>
  );
}
export default Header;
