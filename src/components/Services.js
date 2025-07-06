// Services.js
import React, { useState } from 'react';
import './Services.css';

function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleText = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-left">
          <h2>Ce que je peux vous offrir</h2>
          <p>
            En tant que développeuse web et marketeuse, je combine les outils numériques et les designs créatifs pour créer une présence en ligne unique, efficace et impactante pour mes clients.
          </p>
        </div>
        <div className="services-right">
          {[{
            title: "Web Design",
            content: "Conception de sites modernes, ergonomiques et responsives pour une expérience utilisateur optimale."
          }, {
            title: "Marketing",
            content: "Stratégies de visibilité, SEO, gestion des réseaux sociaux et campagnes digitales."
          }, {
            title: "Design Graphique",
            content: "Création de visuels impactants : logos, flyers, présentations professionnelles et branding."
          }].map((service, index) => (
            <div className="service-item" key={index}>
              <div className="service-header" onClick={() => toggleText(index)}>
                <h3>{service.title}</h3>
                <span className="arrow">{activeIndex === index ? '▲' : '▼'}</span>
              </div>
              {activeIndex === index && (
                <p className="service-description">{service.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

