import React, { useContext } from "react";
import "../blog/Blog.css";
import { blog } from "../../dummydata";
import Heading from "../common/heading/Heading";
import { LanguageContext } from "../../LanguageContext"; // Importa el contexto de idioma

const Hblog = () => {
  const { idioma } = useContext(LanguageContext); // Obtén el idioma desde el contexto

  return (
    <>
      <section className="blog">
        <div className="container">
          <Heading 
            subtitle={idioma === "español" ? "NUESTRO BLOG" : "OUR BLOG"} 
            title={idioma === "español" ? "Lo más reciente del blog" : "Recent From Blog"} 
          />
          <div className="grid2">
            {blog.slice(0, 3).map((val, index) => (
              <div className="items shadow" key={index}>
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <div className="admin flexSB">
                    <span>
                      <i className="fa fa-user"></i>
                      <label htmlFor="">{val.type}</label>
                    </span>
                    <span>
                      <i className="fa fa-calendar-alt"></i>
                      <label htmlFor="">{val.date}</label>
                    </span>
                    <span>
                      <i className="fa fa-comments"></i>
                      <label htmlFor="">{val.com}</label>
                    </span>
                  </div>
                  <h1>{idioma === "español" ? val.title_es : val.title}</h1>
                  <p>{idioma === "español" ? val.desc_es : val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hblog;
