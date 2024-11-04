import React, { useContext } from "react";
import "./About.css";
import Back from "../common/back/Back";
import AboutCard from "./AboutCard";
import { LanguageContext } from "../../LanguageContext"; // Importa el contexto de idioma

const About = () => {
  const { idioma } = useContext(LanguageContext); // Obtiene el idioma desde el contexto

  return (
    <>
      <Back title={idioma === "español" ? "Sobre Nosotros" : "About Us"} />
      <AboutCard />
    </>
  );
};

export default About;
