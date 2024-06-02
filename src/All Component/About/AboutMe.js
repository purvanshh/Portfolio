import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faStar, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './AboutMe.css';

const AboutMePage = () => {
  return (
    <div className="container">
      <h1 className="title">ABOUT ME</h1>
      <p className="description">I am a Scaler student who has completed 3 trimesters.</p>
      <p className="description">I'm a web developer who loves solving problems and building websites.</p>
      <p className="description">I am passionate about technologies and love to learn new things.</p>
      <p className="description">I am more interested in building new web technologies and products.</p>
      <p className="description">
        I always apply my experience in developing products with Node.js and modern JavaScript libraries and frameworks like
        React.js.
      </p>
      <p className="description">Currently expanding my portfolio by building more projects that I can add here.</p>
    </div>
  );
};

export default AboutMePage;
