import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import './HeroSection.css';

// Securely target the pastor's original background image
import pastorBg from './images/pic1.png'; 

const HeroSection: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  // Fires the text-reveal cascading animations upon layout mount
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="premium-hero-viewport">
      {/* PASTOR BACKGROUND IMAGE OVERALL LAYER */}
      <div 
        className="hero-media-background" 
        style={{ backgroundImage: `url(${pastorBg})` }}
      ></div>
      
      {/* High-Contrast Tint Overlays for Absolute Text Legibility */}
      <div className="hero-cinematic-overlay"></div>

      {/* CENTRALIZED ANIMATED SCRIPTURE TEXT */}
      <Container className="hero-content-alignment-wrapper text-center">
        <div className="hero-text-stack">
          
          {/* Item 1: Animated Quote Title */}
          <h1 className={`hero-scripture-quote ${animate ? 'fade-in-element-1' : ''}`}>
            "Where the carcass is, there will the eagles be gathered together."
          </h1>

          {/* Item 2: Animated Scripture Citation */}
          <p className={`hero-scripture-citation ${animate ? 'fade-in-element-2' : ''}`}>
            — Matthew 24:28
          </p>

          {/* Item 3: Animated Gold Sparkline Divider */}
          <div className={`hero-animated-divider ${animate ? 'fade-in-element-3' : ''}`}>
            <span className="hero-gold-core-sparkle"></span>
          </div>

          {/* Item 4: Action Buttons Matrix */}
          <div className={`hero-button-row d-flex justify-content-center gap-3 mt-4 ${animate ? 'fade-in-element-4' : ''}`}>
            <Button className="hero-btn-primary px-4 py-2 fw-semibold">
              Join Us
            </Button>
            <Button className="hero-btn-secondary px-4 py-2 fw-semibold">
              Watch Sermons
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default HeroSection;