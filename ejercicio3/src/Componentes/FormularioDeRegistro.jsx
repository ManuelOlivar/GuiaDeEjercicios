import React, { useState } from 'react';

const FormularioDeRegistro = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.name.trim() === '') {
      newErrors.name = 'El nombre es requerido';
      isValid = false;
    }

    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = 'El correo electrónico no es válido';
      isValid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Aquí podrías realizar acciones como enviar los datos al servidor
      // En este ejemplo, simplemente mostramos los datos ingresados
      alert(`Registro exitoso:\nNombre: ${formData.name}\nCorreo electrónico: ${formData.email}`);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Formulario de Registro</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <div className="invalid-feedback">{errors.name}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo Electrónico
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="invalid-feedback">{errors.email}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <div className="invalid-feedback">{errors.password}</div>
        </div>
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default FormularioDeRegistro;
