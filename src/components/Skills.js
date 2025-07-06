// Skills.js
import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-left">
          <h2>Compétences</h2>

          <div className="skill-bar">
            <span>HTML/CSS</span>
            <div className="bar"><div className="fill" style={{ width: '90%' }}></div></div>
          </div>

          <div className="skill-bar">
            <span>JavaScript</span>
            <div className="bar"><div className="fill" style={{ width: '80%' }}></div></div>
          </div>

          <div className="skill-bar">
            <span>React</span>
            <div className="bar"><div className="fill" style={{ width: '75%' }}></div></div>
          </div>

          <div className="skill-bar">
            <span>Marketing Digital</span>
            <div className="bar"><div className="fill" style={{ width: '85%' }}></div></div>
          </div>

          <div className="skill-bar">
            <span>Design Graphique</span>
            <div className="bar"><div className="fill" style={{ width: '70%' }}></div></div>
          </div>
        </div>

        <div className="skills-right">
          <h2>Expériences</h2>
          <ul className="experience-list">
            <li>
              <strong>Développeuse Web – Freelance</strong>
              <p>Depuis 2024</p>
            </li>
            <li>
              <strong>Marketeuse Digitale – Freelance</strong>
              <p>2022 – 2024</p>
            </li>
             <li>
              <strong>Stage – Vierge Beauty Care</strong>
            <p>2021 – 2023</p>
            </li>
            <li>
              <strong>Stage – MITOU Chic</strong>
              <p>2021 – 2022</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
