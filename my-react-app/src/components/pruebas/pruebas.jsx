import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Pruebas.css';

function App() {
  const [usuarios, setUsuarios] = useState([]);

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
      <h1>Student List</h1>
      <ul className="user-list">
        {usuarios.map((usuario, index) => (
          <li key={index} className="user-card">
            <p><strong>Name:</strong> {usuario.nombre}</p>
            <p><strong>Address:</strong> {usuario.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
