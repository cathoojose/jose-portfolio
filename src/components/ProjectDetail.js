import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaHome, FaShoppingCart, FaMobile, FaUtensils } from 'react-icons/fa';
import './ProjectDetail.css';
import { Link } from 'react-router-dom';

const ProjectDetail = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 'shopping-cart',
      title: 'Shopping Cart',
      category: 'web',
      shortDescription: 'Un panier d\'achat fonctionnel avec gestion des produits',
      longDescription: 'Ce projet est une application de panier d\'achat complète développée avec React. Elle inclut des fonctionnalités telles que l\'ajout/suppression d\'articles, la modification des quantités, le calcul du total et l\'application de codes promo. L\'interface est responsive et intuitive, offrant une expérience utilisateur fluide.',
      technologies: ['Html', 'JavaScript', 'CSS', 'Local Storage'],
      features: [
        'Ajout/suppression d\'articles',
        'Modification des quantités',
        'Calcul automatique du total',
        'Application de codes promo',
        'Interface responsive'
      ],
      challenges: [
        'Gestion de l\'état complexe du panier',
        'Synchronisation des données entre composants'
      ],
      solutions: [
        'Utilisation du Context API pour la gestion d\'état',
        'Mise en place de reducers pour les actions complexes'
      ],
      githubLink: 'https://github.com/cathoojose/Shoping_cart',
      liveLink: 'https://shoping-cart-rose-ten.vercel.app/'
    },

    {
      id: 'ecoriane',
      title: 'Ecoriane - Plateforme Agricole',
      category: 'web',
      shortDescription: 'Plateforme web pour connecter les producteurs locaux aux marchés.',
      longDescription: 'Écoriane est une application web innovante qui a pour mission de valoriser les cultures locales en Haïti. Elle permet aux producteurs agricoles, même en zone rurale, de présenter leurs produits, gérer leurs offres et être connectés directement aux acheteurs. L’interface est pensée pour être simple, accessible et fonctionnelle, même avec une connexion limitée. Elle met en valeur les produits locaux avec des visuels attractifs et favorise un commerce équitable et transparent.',
      technologies: ['HTML', 'CSS', 'MySQL', 'Node.js'],
      features: [
        'Catalogue de produits agricoles haïtiens',
        'Espace producteur avec gestion des produits',
        'Connexion directe producteurs-acheteurs',
        'Accès optimisé pour les zones à faible connectivité',
        'Mise en avant des cultures locales'
      ],
      challenges: [
        'Sensibilisation des producteurs à l’utilisation du numérique',
        'Création d’une interface simple et intuitive pour tous les profils'
      ],
      solutions: [
        'Formation prévue pour les utilisateurs via des vidéos/tutos',
        'Design UX épuré avec navigation simplifiée'
      ],
      githubLink: 'https://github.com/cathoojose/Ecoriane', // Tu peux ajouter ton lien GitHub quand le code est prêt
      liveLink:'https://ecoriane.vercel.app/index.html'
    },


    {
      id: 'haitian-delights',
      title: 'Haitian Delights',
      category: 'web',
      shortDescription: 'Application de recettes culinaires haïtiennes',
      longDescription: 'Haitian Delights est une application web qui présente des recettes traditionnelles haïtiennes. Elle comprend une base de données de recettes, des filtres par catégories, des instructions détaillées et des listes d\'ingrédients. Le design met en valeur la culture haïtienne avec des couleurs vives et des images appétissantes.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      features: [
        'Base de données de recettes haïtiennes',
        'Filtres par catégories et ingrédients',
        'Instructions étape par étape',
        'Liste de courses générée automatiquement',
        'Design inspiré de la culture haïtienne'
      ],
      challenges: [
        'Organisation des données des recettes',
        'Création d\'un système de filtres efficace'
      ],
      solutions: [
        'Structure de données JSON optimisée',
        'Algorithme de filtrage dynamique'
      ],
      githubLink: null,
      liveLink: null
    },
    {
      id: 'ecoriane',
      title: 'Ecoriane App mobile',
      category: 'mobile',
      shortDescription: 'Application mobile pour connecter les producteurs ruraux aux marchés agricoles.',
      longDescription: `Écoriane est une application mobile conçue pour soutenir les producteurs agricoles haïtiens, en particulier dans les zones rurales. Elle facilite la mise en relation directe entre producteurs et acheteurs, l’accès à l’information sur les prix du marché, et le suivi des cultures. L'application intègre également des modules éducatifs et un espace communautaire pour favoriser l'entraide entre agriculteurs.`,
      technologies: ['React Native', 'Firebase', 'Node.js', 'Google Maps API'],
      features: [
        'Inscription et profil producteur',
        'Catalogue de produits agricoles à vendre',
        'Mise en relation directe entre producteurs et acheteurs',
        'Géolocalisation des producteurs et marchés',
        'Accès à des conseils agricoles et météo',
        'Système de messagerie ou notifications pour commandes'
      ],
      challenges: [
        'Connectivité Internet limitée en zones rurales',
        'Accès simplifié pour des utilisateurs peu technophiles'
      ],
      solutions: [
        'Mode hors-ligne partiel avec synchronisation différée',
        'Interface intuitive avec pictogrammes et langues locales'
      ],
      githubLink: null,
      liveLink: null
    },

    {
      id: 'airhome',
      title: 'AirHome - Plateforme de location courte durée',
      category: 'desktop', // ou 'web' si tu le fais en ASP.NET
      shortDescription: 'Application C# pour la gestion de locations saisonnières de type Airbnb.',
      longDescription: 'AirHome est une application développée en C# permettant aux utilisateurs de proposer, rechercher et réserver des logements à court terme, inspirée du concept Airbnb. L’interface permet une gestion complète des annonces, des réservations et des paiements. Le projet comprend des modules pour les propriétaires et les locataires, ainsi qu’une base de données relationnelle pour stocker les informations sur les logements, les utilisateurs et les réservations.',
      technologies: ['C#', 'WinForms', 'MySQL', '.NET Framework', 'Guna UI 2'],
      features: [
        'Ajout et gestion d’annonces de logement',
        'Recherche filtrée par ville, prix et dates',
        'Réservation avec système de validation',
        'Interface utilisateur moderne avec Guna UI',
        'Connexion sécurisée avec rôle propriétaire/locataire'
      ],
      challenges: [
        'Architecture MVC dans une application WinForms',
        'Sécurisation des données utilisateurs',
        'Mise à jour dynamique des disponibilités'
      ],
      solutions: [
        'Organisation du code en couches (DAL, BLL, UI)',
        'Cryptage des mots de passe et gestion des sessions',
        'Utilisation de requêtes SQL conditionnelles et de transactions'
      ],
      githubLink: null, // à modifier selon ton lien GitHub
      liveLink: null // si projet web en ligne, sinon tu peux mettre une démo YouTube
    },

    {
      id: 'portfolio',
      title: 'Portfolio Professionnel',
      category: 'web',
      shortDescription: 'Site portfolio pour présenter mes compétences et projets',
      longDescription: 'Ce portfolio présente mes compétences en développement web et marketing digital. Il comprend une section À Propos, mes projets récents, mes compétences techniques et un formulaire de contact. Le design est moderne, responsive et met en valeur mon travail de manière professionnelle.',
      technologies: ['React', 'CSS3', 'JavaScript', 'Netlify'],
      features: [
        'Design responsive et moderne',
        'Présentation des projets avec détails',
        'Section compétences techniques',
        'Formulaire de contact fonctionnel',
        'Animations subtiles pour l\'UX'
      ],
      challenges: [
        'Création d\'un design unique et personnel',
        'Optimisation des performances'
      ],
      solutions: [
        'Design personnalisé avec CSS moderne',
        'Optimisation des images et chargement différé'
      ],
      githubLink: 'https://github.com/cathoojose/portfolio',
      liveLink: null
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-page">
      <Link to="/" className="home-btn">
        <FaHome /> Retour à l'accueil
      </Link>


      <div className="container">
        <div className="page-header">
          <h1>Mes Projets</h1>
          <p>Découvrez mes réalisations en développement web et mobile</p>
        </div>

        {/* Filtres */}
        <div className="project-filters">
          <button 
            className={activeFilter === 'all' ? 'active' : ''}
            onClick={() => setActiveFilter('all')}
          >
            Tous les projets
          </button>
          <button 
            className={activeFilter === 'web' ? 'active' : ''}
            onClick={() => setActiveFilter('web')}
          >
            <FaCode /> Web
          </button>
          <button 
            className={activeFilter === 'mobile' ? 'active' : ''}
            onClick={() => setActiveFilter('mobile')}
          >
            <FaMobile /> Mobile
          </button>
        </div>

        {/* Grille de projets */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-icon">
                {project.category === 'mobile' ? <FaMobile /> : 
                 project.id === 'haitian-delights' ? <FaUtensils /> : 
                 project.id === 'shopping-cart' ? <FaShoppingCart /> : <FaCode />}
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.shortDescription}</p>
                
                <div className="project-tech">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span>+{project.technologies.length - 3}</span>
                  )}
                </div>
                
                <div className="project-links">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      <FaGithub /> Code source
                    </a>
                  )}
                  
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="live-link"
                    >
                      <FaExternalLinkAlt /> Voir en ligne
                    </a>
                  )}
                  
                  {!project.githubLink && !project.liveLink && (
                    <span className="coming-soon">Disponible bientôt</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton pour voir plus */}
        <div className="more-projects">
          <a href="https://github.com/cathoojose" target="_blank" rel="noopener noreferrer" className="github-btn">
            <FaGithub /> Voir plus sur GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;