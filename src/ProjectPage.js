// src/ProjectPage.js
import React, { useState } from 'react';

const ProjectPage = ({ goToLoginPage }) => {
  const [language, setLanguage] = useState('english');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'english' ? 'arabic' : 'english'));
  };

  const pageStyle = {
    textAlign: 'center',
    margin: '50px',
    padding: '20px',
    border: '2px solid #007bff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    color: '#007bff',
    fontSize: '2em',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>{language === 'english' ? 'myShipment' : 'شحنتي'}</h1>
      <button type="button" style={buttonStyle} onClick={goToLoginPage}>
        Go to Login Page
      </button>
      <button type="button" style={buttonStyle} onClick={toggleLanguage}>
        {language === 'english' ? 'ترجم إلى العربية' : 'Translate to English'}
      </button>
    </div>
  );
};

export default ProjectPage;
