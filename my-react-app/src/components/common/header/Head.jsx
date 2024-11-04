import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { translateText } from '../../../translationService.js'; // Asegúrate de que la ruta sea correcta
import "./header.css"; // Crea un archivo de estilo para Head si no existe

const Head = () => {
  const { t, i18n } = useTranslation();
  const [isTranslating, setIsTranslating] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const history = useHistory();

  // Obtén el usuario logeado de localStorage cuando el componente se monta
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
      setLoggedInUser(user.nombre);
    }
  }, []);

  const handleLogout = () => {
    // Eliminar el usuario de localStorage
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null); // Actualiza el estado

    // Redirige al usuario a la página de inicio de sesión o página principal
    history.push('/login');
  };

  const changeLanguage = async (lng) => {
    if (lng !== i18n.language) {
      setIsTranslating(true);
      try {
        const textsToTranslate = [t('header.title'), t('header.subtitle')];
        const translatedTexts = await Promise.all(
          textsToTranslate.map(text => translateText(text, lng))
        );
        i18n.addResources(lng, 'translation', {
          header: {
            title: translatedTexts[0],
            subtitle: translatedTexts[1]
          }
        });
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
            <i className='fas fa-flag-usa'></i>
          </button>
          <button onClick={() => changeLanguage('es')}>
            <i className='fas fa-flag-spain'></i>
          </button>
        </div>

        <div className='social'>
          <i className='fab fa-facebook-f icon'></i>
          <i className='fab fa-instagram icon'></i>
          <i className='fab fa-twitter icon'></i>
          <i className='fab fa-youtube icon'></i>
        </div>

        {/* Muestra el nombre del usuario y el botón de cierre de sesión si está logeado */}
        {loggedInUser && (
          <div className="user-info">
            <span>Bienvenido, {loggedInUser}</span>
            <button onClick={handleLogout} className="logout-button">
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Head;
