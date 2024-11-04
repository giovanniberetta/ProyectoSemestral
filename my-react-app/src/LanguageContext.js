import React, { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [idioma, setIdioma] = useState("inglés"); // Predeterminado en inglés

  // Cargar idioma desde localStorage cuando el componente se monta
  useEffect(() => {
    const storedIdioma = JSON.parse(localStorage.getItem("loggedInUser"))?.idioma;
    if (storedIdioma) {
      setIdioma(storedIdioma);
    }
  }, []);

  // Función para cambiar el idioma y almacenarlo en localStorage
  const cambiarIdioma = (nuevoIdioma) => {
    setIdioma(nuevoIdioma);
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};
    loggedInUser.idioma = nuevoIdioma;
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
  };

  return (
    <LanguageContext.Provider value={{ idioma, setIdioma: cambiarIdioma }}>
      {children}
    </LanguageContext.Provider>
  );
};
