import React, { useContext } from "react";
import Heading from "../common/heading/Heading";
import PriceCard from "../pricing/PriceCard";
import { LanguageContext } from "../../LanguageContext"; // Importa el contexto de idioma

const Hprice = () => {
  const { idioma } = useContext(LanguageContext); // Obtén el idioma desde el contexto

  return (
    <>
      <section className="hprice padding">
        <Heading 
          subtitle={idioma === "español" ? "NUESTROS PRECIOS" : "OUR PRICING"} 
          title={idioma === "español" ? "Precios y Paquetes" : "Pricing & Packages"} 
        />
        <div className="price container grid">
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Hprice;
