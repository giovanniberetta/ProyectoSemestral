import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { translateText } from '../../../translationService.js'; // Asegúrate de que la ruta sea correcta

const Head = () => {
  const { t, i18n } = useTranslation();
  const [isTranslating, setIsTranslating] = useState(false);

  const changeLanguage = async (lng) => {
    // Si el idioma es diferente del actual, traduce textos
    if (lng !== i18n.language) {
      setIsTranslating(true);
      try {
        // Obtén todos los textos que necesitas traducir
        const textsToTranslate = [t('header.title'), t('header.subtitle')];
        
        // Traducir los textos
        const translatedTexts = await Promise.all(
          textsToTranslate.map(text => translateText(text, lng))
        );

        // Actualiza las traducciones en i18next
        i18n.addResources(lng, 'translation', {
          header: {
            title: translatedTexts[0],
            subtitle: translatedTexts[1]
          }
        });

        // Cambia el idioma en i18next
        i18n.changeLanguage(lng);
      } catch (error) {
        console.error('Error during translation:', error);
      } finally {
        setIsTranslating(false);
      }
    }
  };

  return (
    <section className='head'>
      <div className='container flexSB'>
        <div className='logo'>
          <h1>{t('header.title')}</h1>
          <span>{t('header.subtitle')}</span>
        </div>

        <div className='language-switcher'>
          <button onClick={() => changeLanguage('en')}>
            <i className='fas fa-flag-usa'></i> {/* Icono para inglés */}
          </button>
          <button onClick={() => changeLanguage('es')}>
            <i className='fas fa-flag-spain'></i> {/* Icono para español */}
          </button>
        </div>

        <div className='social'>
          <i className='fab fa-facebook-f icon'></i>
          <i className='fab fa-instagram icon'></i>
          <i className='fab fa-twitter icon'></i>
          <i className='fab fa-youtube icon'></i>
        </div>
      </div>
    </section>
  );
};

export default Head;
