import React, { useState } from 'react';
import './Register.css';

const RegisterForm = ({ onSwitch, onClose }) => {
    const [selectedTab, setSelectedTab] = useState('usuario');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [logo, setLogo] = useState(null);
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedTab === 'usuario') {
            console.log('Registro Usuario: ', { username, email, password });
        } else {
            console.log('Registro Emprendedor: ', { businessName, logo, email, phone, password });
        }
    };

    const handleLogoChange = (e) => {
        setLogo(e.target.files[0]);
    };

    return (
        <div className="register">
            <div className="auth-container">
                <div className="form">
                    <h2>Bienvenido a Denicho</h2>

                    <div className="tabs">
                        <button
                            className={`tab ${selectedTab === 'usuario' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('usuario')}
                        >
                            Usuario
                        </button>
                        <button
                            className={`tab ${selectedTab === 'emprendedor' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('emprendedor')}
                        >
                            Emprendedor
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {selectedTab === 'usuario' ? (
                            <>
                                <div>
                                    <label>Nombre de Usuario</label>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
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
                            </>
                        ) : (
                            <>
                                <div>
                                    <label>Nombre del Emprendimiento</label>
                                    <input
                                        type="text"
                                        value={businessName}
                                        onChange={(e) => setBusinessName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Logo</label>
                                    <input
                                        type="file"
                                        onChange={handleLogoChange}
                                        required
                                    />
                                </div>
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
                                    <label>Celular</label>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
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
                            </>
                        )}
                        <button type="submit">Registrarse</button>
                    </form>
                    <a href="/login">
                        <p>¿Ya tienes cuenta? <span onClick={onSwitch}>Inicia sesión aquí</span></p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
