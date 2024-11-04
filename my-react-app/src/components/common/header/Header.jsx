import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";
import { LanguageContext } from "../../../LanguageContext"; // Importa el contexto de idioma

const Header = () => {
  const [click, setClick] = useState(false);
  const { idioma } = useContext(LanguageContext); // Obtén el idioma desde el contexto

  // Definimos un array de elementos de menú en función del idioma
  const menuItems = [
    { path: "/", label: idioma === "español" ? "Inicio" : "Home" },
    { path: "/courses", label: idioma === "español" ? "Todos los Cursos" : "All Courses" },
    { path: "/about", label: idioma === "español" ? "Acerca de" : "About" },
    { path: "/team", label: idioma === "español" ? "Equipo" : "Team" },
    { path: "/pricing", label: idioma === "español" ? "Precios" : "Pricing" },
    { path: "/journal", label: idioma === "español" ? "Diario" : "Journal" },
    { path: "/contact", label: idioma === "español" ? "Contacto" : "Contact" },
    { path: "/pruebas", label: idioma === "español" ? "Lista" : "List" },
  ];

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => setClick(false)}
          >
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="start">
            <Link to="/login">
              <div className="button">{idioma === "español" ? "Iniciar Sesión" : "Login"}</div>
            </Link>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
