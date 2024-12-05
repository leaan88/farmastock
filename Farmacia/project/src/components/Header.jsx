import React from 'react';
import '../styles/Header.css';

export function Header() {
  return (
    <header className="header">
      <h1>Mi Aplicación</h1>
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#acerca">Acerca de</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}