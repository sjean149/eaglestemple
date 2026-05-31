import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './HeroSection.css';
import Pic1 from './images/pic1.png';

const HeroSection = () => {
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

      {/* BACKGROUND IMAGE */}
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
      <div className="floating floating-1">
        ✨ The Bride is Preparing
      </div>

      <div className="floating floating-2">
        🕊️ The Revealed Word of the Hour
      </div>

      <div className="floating floating-3">
        🔥 Eagles Gathering Around the Word
      </div>

      {/* MAIN CONTENT */}
      <Container className="hero-content text-center">

        <h1 className="hero-title">
          The End-Time Message
        </h1>

        <p className="hero-scripture">
          “Where the carcass is, there will the eagles be gathered together.”
          <br />
          — Matthew 24:28
        </p>

        <p className="hero-description">
          Experience the revealed Word of this hour.
          Join believers seeking truth, faith, and spiritual awakening
          through the End-Time Message.
        </p>

        <div className="hero-buttons">

          <Button
            variant="warning"
            size="lg"
            className="hero-btn"
          >
            Join Us
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            className="hero-btn-secondary"
          >
            Watch Sermons
          </Button>

        </div>

      </Container>

    </section>
  );
};

export default HeroSection;