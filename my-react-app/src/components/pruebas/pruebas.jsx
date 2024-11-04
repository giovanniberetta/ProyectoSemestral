import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './Pruebas.css';
import { LanguageContext } from '../../LanguageContext'; // Importa el contexto de idioma

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const { idioma } = useContext(LanguageContext); // Obtén el idioma desde el contexto

  useEffect(() => {
    axios.get("http://localhost/educacion_calidad/getUsuarios.php")
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>{idioma === 'español' ? 'Lista de Estudiantes' : 'Student List'}</h1>
      <ul className="user-list">
        {usuarios.map((usuario, index) => (
          <li key={index} className="user-card">
            <p><strong>{idioma === 'español' ? 'Nombre:' : 'Name:'}</strong> {usuario.nombre}</p>
            <p><strong>{idioma === 'español' ? 'Correo Electrónico:' : 'Email:'}</strong> {usuario.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
