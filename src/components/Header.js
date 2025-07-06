import React from "react";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar container">
        <h1>Carthiana Joseph</h1>
        <ul className="menu">
          <li><a href="#home">Accueil</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="/projects" target="_blank" rel="noopener noreferrer">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;