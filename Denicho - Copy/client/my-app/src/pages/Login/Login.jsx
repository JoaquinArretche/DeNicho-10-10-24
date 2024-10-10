import React, { useState, useEffect } from 'react';
import './Login.css';

const LoginForm = ({ onSwitch, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registro: ', { email, password });
        // Aquí puedes manejar la lógica de registro
    };



    return (
        <div className="login">


            <div className="auth-container">
                <div className="form">
                    <h2>Iniciar Sesion</h2>
                    <form onSubmit={handleSubmit}>

                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Contraseña</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Iniciar Sesión</button>
                    </form>
                    <a href="/registro">
                        <p>¿No tienes cuenta? <span onClick={onSwitch}>Registrate aquí</span></p>
                    </a>
                </div>
            </div>




        </div>
    );
};

export default LoginForm;
