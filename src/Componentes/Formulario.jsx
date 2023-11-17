import React, { useState } from 'react'
import '../Componentes/Formulario.css'
const Formulario = () => {
    const [FormDatos, setFormDatos] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        contraseña: '',
        confirmarcontraseña: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDatos({
            ...FormDatos,
            [name]: value,
        });
    };

    return (
        <div>
            <h2>
                Formulario de Registro
            </h2>
            <div className='container'>

                <form className='dark'>
                    <label className='form-label'>Nombre
                        <input type="text" name="nombre" value={FormDatos.nombre} onChange={handleChange} className='form-control' />
                    </label>
                    <br />
                    <label className='form-label'>Apellido
                        <input type="text" name='apellido' value={FormDatos.apellido} onChange={handleChange} className='form-control' />
                    </label>
                    <br />
                    <label className='form-label'>Email
                        <input type="email" name="email" value={FormDatos.email} onChange={handleChange} className='form-control' />
                    </label>
                    <br />
                    <label className='form-label'>Telefono
                        <input type="tel" name='telefono' value={FormDatos.telefono} onChange={handleChange} className='form-control' />
                    </label>
                    <br />
                    <label className='form-label'>Contraseña
                        <input type="password" name='contraseña' value={FormDatos.contraseña} onChange={handleChange} className='form-control' />
                    </label>
                    <br />
                    <label className='form-label'>Confirmar contraseña
                        <input type="password" name='confirmarcontraseña' value={FormDatos.confirmarcontraseña} onChange={handleChange} className='form-control' />
                    </label>
                    <br />
                    <button type='submit'>Registrarse</button>
                </form>
            </div>

        </div>
    )
}

export default Formulario
