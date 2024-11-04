import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "./Register.css";

function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('estudiante'); // Valor por defecto "estudiante"
  const [idioma, setIdioma] = useState('español'); // Estado para preferencia de idioma con valor por defecto
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(
        'http://localhost/educacion_calidad/register.php',
        { nombre, email, password, rol, idioma }, // Incluye "idioma" en los datos enviados
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.data.success) {
        setSuccess("Registro exitoso. Redirigiendo a la página de inicio de sesión...");
        setTimeout(() => history.push('/login'), 3000); // Redirige después de 2 segundos
      } else {
        setError(response.data.message || "Error al registrar el usuario");
      }
    } catch (error) {
      if (error.response) {
        console.error('Error en la respuesta del servidor:', error.response.data);
        setError(error.response.data.message || 'Error en el servidor');
      } else if (error.request) {
        console.error('Error en la solicitud:', error.request);
        setError('No se recibió respuesta del servidor');
      } else {
        console.error('Error en la configuración de la solicitud:', error.message);
        setError('Error al configurar la solicitud');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Registro de Usuario</h1>
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <label>Rol:</label>
          <select value={rol} onChange={(e) => setRol(e.target.value)} required>
            <option value="estudiante">Estudiante</option>
            <option value="profesor">Profesor</option>
          </select>

          <label>Idioma Preferido:</label>
          <select value={idioma} onChange={(e) => setIdioma(e.target.value)} required>
            <option value="español">Español</option>
            <option value="inglés">Inglés</option>
          </select>
          
          <button type="submit" disabled={loading}>
            {loading ? 'Registrando...' : 'Registrarse'}
          </button>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
        </form>
      </div>
    </div>
  );
}

export default Register;
