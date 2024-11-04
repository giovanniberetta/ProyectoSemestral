import React, { useContext } from "react";
import { testimonal } from "../../../dummydata";
import Heading from "../../common/heading/Heading";
import "./style.css";
import { LanguageContext } from "../../../LanguageContext"; // Importa el contexto de idioma

const Testimonal = () => {
  const { idioma } = useContext(LanguageContext); // Obtén el idioma desde el contexto

  return (
    <>
      <section className="testimonal padding">
        <div className="container">
          <Heading
            subtitle={idioma === "español" ? "TESTIMONIOS" : "TESTIMONIAL"}
            title={idioma === "español" ? "Nuestros Estudiantes Exitosos" : "Our Successful Students"}
          />

          <div className="content grid2">
            {testimonal.map((val, index) => (
              <div className="items shadow" key={index}>
                <div className="box flex">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <i className="fa fa-quote-left icon"></i>
                  </div>
                  <div className="name">
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{idioma === "español" ? val.desc_es : val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonal;
