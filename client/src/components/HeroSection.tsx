import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';

// Import all background slide assets securely
import pic1 from './images/pic1.png';
import eagle2 from './images/eaglestemple2.png';
import eagle3 from './images/eaglestemple3.png';
import eagle4 from './images/eaglestemple4.png';
import eagle5 from './images/eaglestemple5.png';
import eagle6 from './images/eaglestemple6.png';

const HeroSection: React.FC = () => {
  // Slideshow Array Pipeline
  const slides = [pic1, eagle2, eagle3, eagle4, eagle5, eagle6];
  
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic 5-Second Interval Engine
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideTimer);
  }, [slides.length]);

  // Shared Animation Base Style
  const animatedElementStyle: React.CSSProperties = {
    opacity: 0, // Starts invisible
    animationName: 'fadeInUpShort',
    animationDuration: '1s',
    animationTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)', // Premium smooth easing curve
    animationFillMode: 'forwards', // Keeps element visible after animation finishes
  };

  return (
    <section 
      className="hero-display-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#030712'
      }}
    >
      {/* BACKGROUND SLIDESHOW LAYER MATRIX */}
      {slides.map((imageAsset, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${imageAsset})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'scale(1.05)' : 'scale(1.0)',
              transition: 'opacity 1.8s ease-in-out, transform 5.2s ease-out',
              zIndex: 0
            }}
          />
        );
      })}

      {/* LUXURY HIGH-CONTRAST GRADIENT OVERLAY */}
      <div
        className="hero-tint-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(3,7,18,0.65) 0%, rgba(3,7,18,0.4) 50%, rgba(3,7,18,0.85) 100%)',
          zIndex: 1
        }}
      ></div>

      {/* FORWARD HERO TEXT CONTENT CORE */}
      <Container
        className="text-center"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '900px',
          padding: '0 20px'
        }}
      >
        <div>
          
          {/* 1. Top Subtitle (Reveals first) */}
          <span
            style={{
              ...animatedElementStyle,
              animationDelay: '0.2s',
              fontFamily: "'Montserrat', sans-serif",
              color: '#fbbf24',
              fontSize: '1rem',
              fontWeight: 600,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '15px',
              textShadow: '0 2px 8px rgba(0,0,0,0.6)'
            }}
          >
            Welcome to Eagles Temple
          </span>

          {/* 2. Primary H1 Heading (Reveals second) */}
          <h1
            style={{
              ...animatedElementStyle,
              animationDelay: '0.5s',
              fontFamily: "'Cinzel', Georgia, serif",
              fontSize: '4.2rem',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: '1.2',
              letterSpacing: '1px',
              marginBottom: '25px',
              textShadow: '0 4px 20px rgba(0,0,0,0.8)'
            }}
          >
            The Original Spoken Word
          </h1>

          {/* 3. Core Body Paragraph (Reveals third) */}
          <p
            className="mx-auto"
            style={{
              ...animatedElementStyle,
              animationDelay: '0.8s',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '1.25rem',
              color: '#f1f5f9',
              lineHeight: '1.8',
              maxWidth: '720px',
              marginBottom: '35px',
              textShadow: '0 2px 10px rgba(0,0,0,0.7)'
            }}
          >
            Experience true spiritual awakening, deep foundations of faith, and an uncompromised commitment to divine truth. Join our community as we rise higher together.
          </p>

          {/* 4. Action Buttons (Reveal last) */}
          <div 
            className="d-flex justify-content-center gap-3 flex-wrap"
            style={{
              ...animatedElementStyle,
              animationDelay: '1.1s'
            }}
          >
            <Button
              href="#sermons"
              className="px-5 py-3 fw-bold"
              style={{
                backgroundColor: '#fbbf24',
                border: '1px solid #fbbf24',
                color: '#000000',
                borderRadius: '4px',
                letterSpacing: '1.5px',
                fontSize: '0.95rem',
                boxShadow: '0 4px 20px rgba(251, 191, 36, 0.35)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#fbbf24';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#fbbf24';
                e.currentTarget.style.color = '#000000';
              }}
            >
              WATCH LIVE
            </Button>

            <Button
              href="#about"
              className="px-5 py-3 fw-medium"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                color: '#ffffff',
                borderRadius: '4px',
                letterSpacing: '1.5px',
                fontSize: '0.95rem',
                backdropFilter: 'blur(4px)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#fbbf24';
                e.currentTarget.style.color = '#fbbf24';
                e.currentTarget.style.backgroundColor = 'rgba(251, 191, 36, 0.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              OUR BELIEFS
            </Button>
          </div>

        </div>
      </Container>

      {/* Embedded CSS Keyframes to drive the staggered entry */}
      <style>{`
        @keyframes fadeInUpShort {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;