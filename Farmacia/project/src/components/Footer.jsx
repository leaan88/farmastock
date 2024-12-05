import React from 'react';
import '../styles/Footer.css';

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p>&copy; {year} Mi Aplicación. Todos los derechos reservados.</p>
    </footer>
  );
}