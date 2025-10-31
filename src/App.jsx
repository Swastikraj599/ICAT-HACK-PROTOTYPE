import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero.jsx';
import LawyerDashboard from './pages/LawyerDashboard.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import PublicDashboard from './pages/PublicDashboard.jsx';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if current route is a dashboard route
  const isDashboard = ['/students', '/lawyers', '/public'].includes(location.pathname);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="App">
      {/* Navigation Bar - Only show on landing page */}
      {!isDashboard && (
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <span className="logo-icon">⚖️</span>
              <span className="logo-text">
                Legal<span className="logo-highlight">Hub</span>
              </span>
            </div>

            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              {/* For Landing Page sections */}
              <Link to="/" className="nav-link" onClick={() => scrollToSection('home')}>
                Home
              </Link>
              <a href="#features" className="nav-link" onClick={() => scrollToSection('features')}>
                Features
              </a>
              <a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>
                About
              </a>
              <a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>
                Contact
              </a>

              {/* Clerk Auth Buttons */}
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="nav-btn">Login</button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
              <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
              <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
              <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
            </div>
          </div>
        </nav>
      )}

      {/* ROUTES SECTION */}
      <Routes>
        {/* Main Landing Page */}
        <Route
          path="/"
          element={
            <main className="main-content">
              <section id="home">
                <Hero />
              </section>

              {/* Features Section */}
              <section id="features" className="section features-detail">
                <div className="section-container">
                  <h2 className="section-title">Platform Features</h2>
                  <div className="features-detail-grid">
                    <div className="feature-detail-card">
                      <div className="feature-detail-icon">📱</div>
                      <h3>Responsive Design</h3>
                      <p>Access Legal Hub seamlessly across all devices - mobile, tablet, and desktop.</p>
                    </div>
                    <div className="feature-detail-card">
                      <div className="feature-detail-icon">🔒</div>
                      <h3>Secure & Private</h3>
                      <p>Your information stays private with local client-side storage.</p>
                    </div>
                    <div className="feature-detail-card">
                      <div className="feature-detail-icon">⚡</div>
                      <h3>Lightning Fast</h3>
                      <p>Built with lightweight React components for blazing-fast performance.</p>
                    </div>
                    <div className="feature-detail-card">
                      <div className="feature-detail-icon">🎨</div>
                      <h3>Modern UI</h3>
                      <p>Clean, intuitive interface with smooth animations and themes.</p>
                    </div>
                    <div className="feature-detail-card">
                      <div className="feature-detail-icon">📚</div>
                      <h3>Rich Resources</h3>
                      <p>Access study materials, legal news, and professional tools.</p>
                    </div>
                    <div className="feature-detail-card">
                      <div className="feature-detail-icon">🤝</div>
                      <h3>Connect & Collaborate</h3>
                      <p>Find lawyers, book consultations, and build connections.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* About Section */}
              <section id="about" className="section about-section">
                <div className="section-container">
                  <div className="about-content">
                    <div className="about-text">
                      <h2 className="section-title">About Legal Hub</h2>
                      <p>
                        Legal Hub is a revolutionary platform bridging the gap between legal
                        professionals, students, and the public. Our mission is to democratize access
                        to legal knowledge and services.
                      </p>
                      <p>
                        Built with modern technologies and a focus on UX, Legal Hub provides a centralized
                        ecosystem for learning and professional growth.
                      </p>
                      <div className="about-highlights">
                        <div className="highlight-item">
                          <span className="highlight-number">100%</span>
                          <span className="highlight-text">Client-Side</span>
                        </div>
                        <div className="highlight-item">
                          <span className="highlight-number">0</span>
                          <span className="highlight-text">Backend Required</span>
                        </div>
                        <div className="highlight-item">
                          <span className="highlight-number">∞</span>
                          <span className="highlight-text">Possibilities</span>
                        </div>
                      </div>
                    </div>
                    <div className="about-image">
                      <div className="image-placeholder">
                        <span className="placeholder-icon">⚖️</span>
                        <p>Justice for All</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="section contact-section">
                <div className="section-container">
                  <h2 className="section-title">Get In Touch</h2>
                  <div className="contact-content">
                    <div className="contact-info">
                      <div className="contact-item">
                        <div className="contact-icon">📧</div>
                        <div>
                          <h4>Email Us</h4>
                          <p>contact@legalhub.com</p>
                        </div>
                      </div>
                      <div className="contact-item">
                        <div className="contact-icon">💬</div>
                        <div>
                          <h4>Live Chat</h4>
                          <p>Available 24/7</p>
                        </div>
                      </div>
                      <div className="contact-item">
                        <div className="contact-icon">📍</div>
                        <div>
                          <h4>Location</h4>
                          <p>Serving Globally</p>
                        </div>
                      </div>
                    </div>
                    <div className="contact-form">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Your Name" className="form-input" />
                        <input type="email" placeholder="Your Email" className="form-input" />
                        <textarea placeholder="Your Message" rows="5" className="form-textarea"></textarea>
                        <button type="submit" className="form-button">
                          Send Message
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          }
        />

        {/* Dashboard Routes */}
        <Route path="/lawyers" element={<LawyerDashboard />} />
        <Route path="/students" element={<StudentDashboard />} />
        <Route path="/public" element={<PublicDashboard />} />
      </Routes>

      {/* Footer - Only show on landing page */}
      {!isDashboard && (
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-section">
                <h3 className="footer-title">
                  Legal<span className="logo-highlight">Hub</span>
                </h3>
                <p className="footer-description">
                  Empowering legal professionals and the public through accessible, centralized resources.
                </p>
              </div>
              <div className="footer-section">
                <h4 className="footer-heading">Quick Links</h4>
                <ul className="footer-links">
                  <li><Link to="/">Home</Link></li>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4 className="footer-heading">For Users</h4>
                <ul className="footer-links">
                  <li><Link to="/students">Law Students</Link></li>
                  <li><Link to="/lawyers">Lawyers</Link></li>
                  <li><Link to="/public">General Public</Link></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4 className="footer-heading">Legal</h4>
                <ul className="footer-links">
                  <li><a href="/privacy">Privacy Policy</a></li>
                  <li><a href="/terms">Terms of Service</a></li>
                  <li><a href="/disclaimer">Disclaimer</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 Legal Hub. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;