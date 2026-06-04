import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import './HeroSection.css';
import Pic1 from './images/pic1.png';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Triggers the text animations reliably immediately after component mounting
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="light-rays"></div>
      
      {/* PARTICLES */}
      <div className="particles">
        <span style={{ left: '10%', animationDuration: '10s' }}></span>
        <span style={{ left: '20%', animationDuration: '14s' }}></span>
        <span style={{ left: '35%', animationDuration: '18s' }}></span>
        <span style={{ left: '50%', animationDuration: '12s' }}></span>
        <span style={{ left: '65%', animationDuration: '20s' }}></span>
        <span style={{ left: '75%', animationDuration: '15s' }}></span>
        <span style={{ left: '85%', animationDuration: '17s' }}></span>
      </div>

      {/* BACKGROUND IMAGE (Pastor pic1.png) */}
      <div className="hero-background">
        <img
          src={Pic1}
          alt="Eagles Temple"
          className="hero-image"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="hero-overlay"></div>

      {/* ANIMATED LIGHT EFFECT */}
      <div className="light-rays"></div>

      {/* FLOATING CAPTIONS */}
      <div className="floating floating-1">✨</div>
      <div className="floating floating-2">🕊️</div>
      <div className="floating floating-3">🔥</div>

      {/* MAIN CONTENT */}
      <Container className="hero-content text-center">
        {/* Dynamic toggle classes ensure visibility and fire transitions sequentially */}
        <h1 className={`hero-title reveal-item ${isLoaded ? 'reveal-1' : ''}`}>
          The End-Time Message
        </h1>

        <p className={`hero-scripture reveal-item ${isLoaded ? 'reveal-2' : ''}`}>
          “Where the carcass is, there will the eagles be gathered together.”
          <br />
          <span className="scripture-reference">— Matthew 24:28</span>
        </p>

        <p className={`hero-description reveal-item ${isLoaded ? 'reveal-3' : ''}`}>
          Experience the revealed Word of this hour.
          Join believers seeking truth, faith, and spiritual awakening
          through the End-Time Message.
        </p>

        <div className={`hero-buttons reveal-item ${isLoaded ? 'reveal-4' : ''}`}>
          <Button variant="warning" size="lg" className="hero-btn">
            Join Us
          </Button>
          <Button variant="outline-light" size="lg" className="hero-btn-secondary">
            Watch Sermons
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
