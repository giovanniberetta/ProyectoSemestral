import React, { useContext } from "react";
import Heading from "../common/heading/Heading";
import "./About.css";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";
import { LanguageContext } from "../../LanguageContext"; // Importa el contexto de idioma

const AboutCard = () => {
  const { idioma } = useContext(LanguageContext); // Obtiene el idioma desde el contexto

  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/about.webp" alt="./images/aux.png" />
          </div>
          <div className="right row">
            <Heading 
              subtitle={idioma === "español" ? "APRENDE CUALQUIER COSA" : "LEARN ANYTHING"} 
              title={idioma === "español" ? "Beneficios del Aprendizaje en Línea" : "Benefits About Online Learning Expertise"} 
            />
            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="item flexSB" key={val.id}>
                    <div className="img">
                      <img src={val.cover} alt="./images/about.webp" />
                    </div>
                    <div className="text">
                      <h2>{idioma === "español" ? val.titulo_es : val.title}</h2>
                      <p>{idioma === "español" ? val.desc_es : val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default AboutCard;
