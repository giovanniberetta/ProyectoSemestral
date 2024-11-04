import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import "./header.css"; // Crea un archivo de estilo para Head si no existe

const Head = () => {
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
  return (
    <section className='head'>
      <div className='container flexSB'>
        <div className='logo'>
        </div>

        <div className='social'>
          <i className='fab fa-facebook-f icon'></i>
          <i className='fab fa-instagram icon'></i>
          <i className='fab fa-twitter icon'></i>
          <i className='fab fa-youtube icon'></i>
        </div>

        {/* Muestra el nombre del usuario y el botón de cierre de sesión si está logeado */}
        {loggedInUser && (
        <div className="user-info-container">
          <div className="user-info">
            <span>Bienvenido, {loggedInUser}</span>
            <button onClick={handleLogout} className="logout-button">
              Cerrar sesión
            </button>
          </div>
        </div>
       )}
      </div>
    </section>
  );
};

export default Head;
