// About.js
import React from 'react';
import './About.css';
import profileImage from '../components/images/informaticienne.jpg';

function About() {
  return (
    <section className="about-section">
      <div className="container about-content">
        <div className="about-photo">
          <img src={profileImage} alt="Cathiana" className="profile-img" />
        </div>
        
        <div className="about-text">
          <h2>À propos de moi</h2>
          <p>
            Je suis Carthiana Joseph , développeuse web et spécialiste en marketing digital.
Passionnée par la création de solutions digitales pertinentes et fonctionnelles, je conçois des sites modernes, intuitifs et adaptés aux besoins des utilisateurs.

En parallèle, j’accompagne les entreprises et entrepreneurs à mieux se faire connaître en ligne et à atteindre leurs objectifs dans le développement de stratégies digitales percutantes, visant à renforcer leur visibilité en ligne et à optimiser leur performance.

Mon objectif Allier design pensant , expérience utilisateur et stratégie efficace pour offrir des résultats concrets et durables.
          </p>
        
          <div className="contact-btn-container">
            <button 
              className="contact-btn"
              onClick={() => window.location.href = '#contact'} 
            >
              Laissons-nous discuter
              <svg xmlns="http://www.w3.org/2000/svg" className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8m-4 4V8m8 4a8 8 0 11-16 0 8 8 0 0116 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;