import React, { useContext } from "react";
import Heading from "../../common/heading/Heading";
import "./hero.css";
import { LanguageContext } from "../../../LanguageContext"; // Importa el contexto de idioma

const Hero = () => {
  const { idioma } = useContext(LanguageContext); // Obtén el idioma desde el contexto

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            {idioma === "español" ? (
              <Heading subtitle="BIENVENIDO A ACADEMIA" title="La mejor experiencia en educación en línea" />
            ) : (
              <Heading subtitle="WELCOME TO ACADEMIA" title="Best Online Education Expertise" />
            )}
            <p>
              {idioma === "español"
                ? "Muy muy lejos, detrás de las montañas de palabras, lejos de los países Vokalia y Consonantia, viven los textos ciegos."
                : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."}
            </p>
            <div className="button">
              <button className="primary-btn">
                {idioma === "español" ? "COMIENZA AHORA" : "GET STARTED NOW"} <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <div className="button-container">
              <button>
                {idioma === "español" ? "VER CURSOS" : "VIEW COURSE"} <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
