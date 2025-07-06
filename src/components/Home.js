import React from 'react';
import './Home.css';
import bgImage from './images/HomePages.jpg';

function Home() {
  return (
    <section
      id="home"
      className="home-section"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="overlay">
        <div className="intro-text">
        <h1>Hello! Je suis <br></br> Carthiana Joseph</h1>
          <h4>Développeuse Web & Marketeuse Digitale</h4>
        </div>
      </div>
    </section>
  );
}

export default Home;
