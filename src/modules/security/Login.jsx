import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <header className="login-header">
          <img src="logo_peru.png" alt="Logo Perú" className="logo-peru" />
          <div className="institute-info">
            <h2>CITEacuícola pesquero</h2>
            <p>Ahuashiyacu</p>
          </div>
        </header>
        <h3>Iniciar Sesión</h3>
        <p>Bienvenido Al Panel De Usuario</p>
        <form className="login-form">
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Usuario" />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Contraseña" />
          </div>
          <a href="#" className="recover-password">
            Recuperar contraseña
          </a>
          <button className="login-button">INGRESAR</button>
        </form>
        <footer className="footer">
          <p>© 2024 Todos Los Derechos Reservados. Grupo JAMIL</p>
        </footer>
      </div>
      <div className="login-image">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipNci-W6ukY4-MKJvLznl1JtiJt4tChH94-MSfRB=s1360-w1360-h1020"
          alt="Imagen Institución"
        />
      </div>
    </div>
  );
};

export default Login;
