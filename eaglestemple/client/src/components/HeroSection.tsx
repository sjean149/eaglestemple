import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import "../styles/HeroSection.css"; // Integrating isolated stylesheets securely

import pic1 from './images/pic1.png';
import eagle2 from './images/eaglestemple2.png';
import eagle3 from './images/eaglestemple3.png';
import eagle4 from './images/eaglestemple4.png';
import eagle5 from './images/eaglestemple5.png';
import eagle6 from './images/eaglestemple6.png';

const HeroSection: React.FC = () => {
  const slides = [pic1, eagle2, eagle3, eagle4, eagle5, eagle6];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideTimer);
  }, [slides.length]);

  return (
    <section className="hero-display-wrapper">
      
      {/* BACKGROUND SLIDESHOW LAYER MATRIX */}
      {slides.map((imageAsset, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${imageAsset})` }}
        />
      ))}

      {/* LUXURY HIGH-CONTRAST GRADIENT OVERLAY */}
      <div className="hero-tint-overlay" />

      {/* FORWARD HERO TEXT CONTENT CORE */}
      <Container className="text-center hero-text-container">
        <div className="hero-fade-entrance">
          
          {/* Top Architectural Subtitle */}
          <span className="hero-subtitle">
            Welcome to Eagles Temple
          </span>

          {/* Primary Cinematic H1 Heading */}
          <h1 className="hero-title">
            The Original Spoken Word
          </h1>

          {/* Core Body Message Copy */}
          <p className="mx-auto hero-message">
            Experience true spiritual awakening, deep foundations of faith, and an uncompromised commitment to divine truth. Join our community as we rise higher together.
          </p>

          {/* Dynamic Dual Call-To-Action Matrices */}
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button
              href="#sermons"
              className="px-5 py-3 fw-bold btn-watch-live"
            >
              WATCH LIVE
            </Button>

            <Button
              href="#about"
              className="px-5 py-3 fw-medium btn-our-beliefs"
            >
              OUR BELIEFS
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default HeroSection;