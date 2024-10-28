import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de envío aquí
        console.log('Datos enviados:', formData);
    };

    return (
        <section id="contact">
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Correo Electrónico:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Mensaje:
                    <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                </label>
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
};

export default ContactForm;
