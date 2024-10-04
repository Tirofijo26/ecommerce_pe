'use client'

import React, { useState, FormEvent, ChangeEvent } from 'react';

import "./styles.css";

interface Account {
  email: string;
  password: string;
  userType?: string;
  fullName?: string;
  companyName?: string;
  companyId?: string;
  securityQuestion?: string;
  securityAnswer?: string;
}

const LoginRegister: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [userType, setUserType] = useState<'buyer' | 'seller'>('buyer');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState<Account>({
    email: '',
    password: '',
    userType: 'buyer',
    fullName: '',
    companyName: '',
    companyId: '',
    securityQuestion: '',
    securityAnswer: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleTabChange = (tab: 'login' | 'register') => {
    setActiveTab(tab);
  };

  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const account = accounts.find(
      (acc) => acc.email === loginData.email && acc.password === loginData.password
    );
    if (account) {
      alert('Inicio de sesión exitoso. Redirigiendo al índice...');
      // Aquí puedes redirigir a la página de índice
      // window.location.href = '/index';
    } else {
      alert('Correo electrónico o contraseña incorrectos.');
    }
  };

  const handleRegisterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (registerData.password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    if (accounts.some(acc => acc.email === registerData.email)) {
      alert('Este correo electrónico ya está registrado.');
      return;
    }
    setAccounts([...accounts, registerData]);
    console.log('Cuenta registrada:', registerData);
    console.log('Todas las cuentas:', [...accounts, registerData]);
    alert('Registro exitoso. Por favor, inicie sesión.');
    setActiveTab('login');
    // Limpiar el formulario de registro
    setRegisterData({
      email: '',
      password: '',
      userType: 'buyer',
      fullName: '',
      companyName: '',
      companyId: '',
      securityQuestion: '',
      securityAnswer: '',
    });
    setConfirmPassword('');
    setUserType('buyer');
  };

  const handleLoginInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleRegisterInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'userType') {
      setUserType(value as 'buyer' | 'seller');
    }
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="container">
      <h1>Bienvenido a MerkZone</h1>
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
          onClick={() => handleTabChange('login')}
        >
          Iniciar Sesión
        </button>
        <button
          className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
          onClick={() => handleTabChange('register')}
        >
          Registrarse
        </button>
      </div>
      {activeTab === 'login' && (
        <form id="loginForm" className="form active" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            value={loginData.email}
            onChange={handleLoginInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            required
            value={loginData.password}
            onChange={handleLoginInputChange}
          />
          <button type="submit">Iniciar Sesión</button>
        </form>
      )}
      {activeTab === 'register' && (
        <form id="registerForm" className="form" onSubmit={handleRegisterSubmit}>
          <select
            id="userType"
            name="userType"
            value={registerData.userType}
            onChange={handleRegisterInputChange}
          >
            <option value="buyer">Comprador</option>
            <option value="seller">Vendedor</option>
          </select>
          <input
            type="text"
            name="fullName"
            placeholder="Nombre completo"
            required
            value={registerData.fullName}
            onChange={handleRegisterInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            value={registerData.email}
            onChange={handleRegisterInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            required
            value={registerData.password}
            onChange={handleRegisterInputChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            required
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {userType === 'seller' && (
            <div id="sellerFields">
              <input
                type="text"
                name="companyName"
                placeholder="Nombre de la empresa o marca"
                value={registerData.companyName}
                onChange={handleRegisterInputChange}
              />
              <input
                type="text"
                name="companyId"
                placeholder="NIF/CIF de la empresa"
                value={registerData.companyId}
                onChange={handleRegisterInputChange}
              />
            </div>
          )}
          <select
            id="securityQuestion"
            name="securityQuestion"
            value={registerData.securityQuestion}
            onChange={handleRegisterInputChange}
          >
            <option value="">Seleccione una pregunta de seguridad</option>
            <option value="mascota">¿Cuál es el nombre de tu primera mascota?</option>
            <option value="ciudad">¿En qué ciudad naciste?</option>
            <option value="libro">¿Cuál es tu libro favorito?</option>
          </select>
          <input
            type="text"
            name="securityAnswer"
            placeholder="Respuesta a la pregunta de seguridad"
            required
            value={registerData.securityAnswer}
            onChange={handleRegisterInputChange}
          />
          <button type="submit">Registrarse</button>
        </form>
      )}
    </div>
  );
};

export default LoginRegister;