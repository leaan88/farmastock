import React from 'react';
import { useTheme } from '../hooks/useTheme';
import '../styles/MainContent.css';

export function MainContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className={`main-content ${theme}`}>
      <section className="hero">
        <h2>Bienvenido a mi aplicación</h2>
        <p>Esta es una aplicación mejorada con React</p>
        <button onClick={toggleTheme}>
          Cambiar tema
        </button>
      </section>
    </main>
  );
}