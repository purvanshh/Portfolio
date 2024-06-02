import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faStar, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './AboutMe.css';

const AboutMePage = () => {
  return (
    <div className="container">
      <h1 className="title">ABOUT ME</h1>
      <p className="description">Hello! I'm a dedicated Scaler student currently navigating my fourth trimester.</p>
      <p className="description">With a deep passion for web development, I enjoy tackling complex problems and crafting intuitive, user-friendly websites.</p>
      <p className="description">Technology is my playground. I thrive on learning about the latest advancements and incorporating them into my projects.</p>
      <p className="description">My primary focus is on developing innovative web technologies and products that make a difference.</p>
      <p className="description">I'm proficient in Node.js and modern JavaScript libraries and frameworks like React.js, constantly applying this knowledge to create impactful digital solutions.</p>
      <p className="description">Beyond coding, I love exploring new tech trends, reading about AI advancements, and participating in hackathons.</p>
      <p className="description">I'm actively building my portfolio with diverse projects, aiming to showcase my skills and creativity here soon.</p>
    </div>
  );
};

export default AboutMePage;
