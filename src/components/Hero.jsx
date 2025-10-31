import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setShowDialog(true);
  };

  const handleProfileSelect = (profile) => {
    setShowDialog(false);

    switch (profile) {
      case 'Law Student':
        navigate('/lawstudent');
        break;
      case 'Lawyer/Advocate':
        navigate('/lawyer');
        break;
      case 'General Public':
        navigate('/public');
        break;
      default:
        break;
    }
  };

  const features = [
    {
      icon: '📚',
      title: 'Law Students',
      description: 'Access study materials, mock tests, and track your progress with comprehensive learning resources'
    },
    {
      icon: '⚖️',
      title: 'Practicing Lawyers',
      description: 'Manage your practice, receive case alerts, and showcase your professional profile'
    },
    {
      icon: '👥',
      title: 'General Public',
      description: 'Find lawyers, book consultations, get legal FAQs answered, and read reviews'
    }
  ];

  return (
    <div className="hero-container">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-header">
          <h1 className="hero-title">
            Legal <span className="highlight">Hub</span>
          </h1>
          <p className="hero-subtitle">
            Your Comprehensive Legal Platform
          </p>
          <p className="hero-description">
            Empowering law students, practicing lawyers, and the general public through 
            centralized access to learning resources, legal news, and professional connections.
          </p>
          
          <div className="hero-cta">
            <button className="cta-button primary" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>

        <div className="features-section">
          <h2 className="features-heading">Built For Everyone</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-item">
            <h3 className="stat-number">3</h3>
            <p className="stat-label">User Categories</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">100%</h3>
            <p className="stat-label">Client-Side</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">∞</h3>
            <p className="stat-label">Legal Resources</p>
          </div>
        </div>
      </div>

      {showDialog && (
        <div className="dialog-backdrop" onClick={() => setShowDialog(false)}>
          <div className="dialog-box" onClick={e => e.stopPropagation()}>
            <h2>Select Your Profile</h2>
            <div className="profile-options">
              <button onClick={() => handleProfileSelect('Law Student')}>
                Law Student
              </button>
              <button onClick={() => handleProfileSelect('Lawyer/Advocate')}>
                Lawyer / Advocate
              </button>
              <button onClick={() => handleProfileSelect('General Public')}>
                General Public
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;

