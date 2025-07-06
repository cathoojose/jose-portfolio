// Projects.js
import React from 'react';
import './Projects.css';
import ecommerceImg from './images/web.png';
import blogImg from './images/dashboard.jpg';
import landingImg from './images/design.png';
import { FaArrowRight, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';



function Projects() {
  const projects = [
    
    {
      title: 'Web Design',
      description: 'Conception de sites modernes, ergonomiques et responsives pour une expérience utilisateur optimale.',
      image: ecommerceImg, // tu peux changer l'image si tu veux une image différente
      link: '/projects/web-design'
    },
    {
      title: 'Marketing',
      description: 'Stratégies de visibilité, SEO, gestion des réseaux sociaux et campagnes digitales.',
      image: blogImg, // idem, à adapter selon tes visuels
      link: 'https://65dbc71e53379.site123.me/services'
    },
    {
      title: 'Design Graphique',
      description: 'Création de visuels impactants : logos, flyers, présentations professionnelles et branding.',
      image: landingImg, // image à personnaliser
      link: 'https://65dbc71e53379.site123.me/portfolio/graphic-design'

    }

  ];

  return (
    <section id="projects" className="container">
      <Link to="/" className="home-btn">
        <FaHome /> Retour à l'accueil
      </Link>
      <h2>Mes Projets Récents</h2>
      <div className="project-list">
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
            <img src={proj.image} alt={proj.title} className="project-img" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <button 
              className="project-btn"
              onClick={() => window.location.href = proj.link}
            >
              Voir plus
              <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;