import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../../../LanguageContext"; // Importa el contexto de idioma

const Back = ({ title }) => {
  const location = useLocation();
  const { idioma } = useContext(LanguageContext); // Obtiene el idioma desde el contexto

  return (
    <>
      <section className="back">
        <h2>
          {idioma === "español" ? "Inicio" : "Home"} / {location.pathname.split("/")[1]}
        </h2>
        <h1>{title}</h1>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Back;
