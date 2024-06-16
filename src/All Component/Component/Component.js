import React from 'react';
import profileImage from './Profileimage.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';
import './Component.css';

// Typewriter component
const TypewriterComponent = () => (
  <Typewriter
    options={{
      strings: ['Student', 'Software Developer', 'Open Source Contributor'],
      autoStart: true,
      loop: true,
      typingSpeed: 75,
      deleteSpeed: 50,
      delay: 25,
    }}
  />
);

const Component = () => {
  return (
    <div className="container">
      <div className="left-section">
        <h1 className="greet">Hi, there I'm<br /></h1>
        <h1 className="name">Purvansh Sahu</h1>
        <div className="subtitle">
          <TypewriterComponent />
        </div>
      </div>
      <div className="right-section">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="icon-wrapper">
          <a href="https://www.linkedin.com/in/purvansh-sahu-25b24228a" target="_blank" rel="noopener noreferrer" className="icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/purvanshh" target="_blank" rel="noopener noreferrer" className="icon">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:purvanshhsahu@gmail.com" target="_blank" className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Component;
