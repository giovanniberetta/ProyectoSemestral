import React, { useContext } from "react";
import Back from "../common/back/Back";
import BlogCard from "./BlogCard";
import "./Blog.css";
import { LanguageContext } from "../../LanguageContext"; // Importa el contexto de idioma

const Blog = () => {
  const { idioma } = useContext(LanguageContext); // Obtiene el idioma desde el contexto

  return (
    <>
      <Back title={idioma === "español" ? "Publicaciones del Blog" : "Blog Posts"} />
      <section className="blog padding">
        <div className="container grid2">
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Blog;
