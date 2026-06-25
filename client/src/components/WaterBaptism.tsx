import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// IMPORT THE BAPTISM IMAGE
import baptismImg from './images/baptism.png'; 

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  meta: string;
}

const WaterBaptism: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>('01');

  // Ref hooks for premium UI sound engines
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);

  const faqData: FAQItem[] = [
    {
      id: '01',
      meta: 'THE COMMAND',
      question: 'Is water baptism merely symbolic, or is it a dynamic command?',
      answer: 'It is an absolute evangelical command established by Christ. Scripturally, it is not an optional ritual or a mere outward organizational standard, but a crucial step of obedience that seals a believer’s entry into the structural covenant of grace.'
    },
    {
      id: '02',
      meta: 'THE METHOD',
      question: 'Why does the doctrine demand full water immersion over sprinkling?',
      answer: 'The original Greek root "baptizo" literally translates to plunge, submerge, or completely overwhelm. True biblical immersion perfectly typifies burial and resurrection—completely burying the old carnal nature beneath the water line and raising a new spiritual being into life.'
    },
    {
      id: '03',
      meta: 'THE FORMULA',
      question: 'What is the structural significance of baptizing in a specific Name?',
      answer: 'According to apostolic patterns observed throughout early scriptural history, baptism was uniformly executed in the Name of the Lord Jesus Christ. This fulfills the singular supreme authority and brings the believer into direct redemptive alignment with the head of the church.'
    },
    {
      id: '04',
      meta: 'THE QUALIFICATION',
      question: 'Who qualifies to approach the waters of full immersion?',
      answer: 'Baptism demands conscious scriptural comprehension. It requires an individual to completely repent of their old actions, exercise authentic active faith, and make an intentional personal dedication. Because of this structural framework, infant sprinkling is omitted from early church practice.'
    }
  ];

  // Micro-interaction sound triggers
  const playHoverSound = () => {
    if (hoverAudioRef.current) {
      hoverAudioRef.current.currentTime = 0;
      hoverAudioRef.current.volume = 0.15; 
      hoverAudioRef.current.play().catch(() => {});
    }
  };

  const playClickSound = () => {
    if (clickAudioRef.current) {
      clickAudioRef.current.currentTime = 0;
      clickAudioRef.current.volume = 0.35;
      clickAudioRef.current.play().catch(() => {});
    }
  };

  const handleToggle = (id: string) => {
    playClickSound();
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div style={{ 
      backgroundColor: '#050505', 
      minHeight: '100vh', 
      paddingTop: '140px', 
      paddingBottom: '80px',
      overflowX: 'hidden'
    }}>
      {/* Hidden Audio Elements */}
      <audio ref={hoverAudioRef} src="/sounds/hover.mp3" preload="auto" />
      <audio ref={clickAudioRef} src="/sounds/click.mp3" preload="auto" />

      <Container>
        {/* Breadcrumb Back Navigation */}
        <Link 
          to="/" 
          className="d-inline-flex align-items-center gap-2 mb-5 back-nav-link"
          onMouseEnter={playHoverSound}
          style={{
            color: '#94a3b8',
            textDecoration: 'none',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.85rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            transition: 'color 0.3s'
          }}
        >
          <span>←</span> Back to Home
        </Link>

        <Row className="g-5">
          {/* LEFT PANEL: Sticky Cinematic Codex Header + Beautifully Blended Image */}
          <Col lg={5} className="position-relative">
            <div style={{ position: 'sticky', top: '160px' }}>
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                color: '#fbbf24',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '12px'
              }}>
                Doctrine Foundations
              </span>
              
              <h1 style={{
                fontFamily: "'Cinzel', Georgia, serif",
                color: '#ffffff',
                fontSize: '3.2rem',
                fontWeight: 700,
                lineHeight: '1.1',
                letterSpacing: '1px'
              }}>
                Water <br />
                <span style={{ color: '#fbbf24', textShadow: '0 0 30px rgba(251,191,36,0.15)' }}>Baptism</span>
              </h1>
              
              <p className="mt-4 mb-4" style={{
                fontFamily: "'Montserrat', sans-serif",
                color: '#94a3b8',
                fontSize: '1rem',
                lineHeight: '1.7',
                maxWidth: '90%'
              }}>
                <i>Repent and be baptized in the name of the Lord Jesus Christ</i>
              </p>

              {/* BAPTISM PICTURE CONTAINER WITH MODERN PREMIUM BLENDING EFFECTS */}
              <div 
                className="baptism-image-frame"
                style={{
                  maxWidth: '90%',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(251, 191, 36, 0.2)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(251, 191, 36, 0.03)',
                  backgroundColor: 'rgba(10, 10, 12, 0.4)',
                  padding: '6px', // Creating a fine inner margin frame look
                  transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
                }}
              >
                <img 
                  src={baptismImg} 
                  alt="Water Baptism Immersion" 
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    display: 'block',
                    opacity: 0.85, // Softer tone to blend with the dark interface
                    mixBlendMode: 'normal',
                    transition: 'all 0.5s ease'
                  }}
                />
              </div>

              {/* Decorative Fluid Vector Element */}
              <div style={{
                position: 'absolute',
                width: '250px',
                height: '250px',
                background: 'radial-gradient(circle, rgba(251,191,36,0.05) 0%, transparent 70%)',
                top: '220px',
                left: '-50px',
                zIndex: -1,
                pointerEvents: 'none'
              }} />
            </div>
          </Col>

          {/* RIGHT PANEL: Interactive Spring-Driven Cards */}
          <Col lg={7}>
            <div className="d-flex flex-column gap-4">
              {faqData.map((item, index) => {
                const isOpen = activeId === item.id;
                return (
                  <div 
                    key={item.id}
                    className={`baptism-card-wrapper ${isOpen ? 'card-active' : ''}`}
                    onMouseEnter={playHoverSound}
                    onClick={() => handleToggle(item.id)}
                    style={{
                      backgroundColor: isOpen ? 'rgba(15, 15, 18, 0.95)' : 'rgba(10, 10, 12, 0.4)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: isOpen ? '1px solid rgba(251, 191, 36, 0.4)' : '1px solid rgba(255, 255, 255, 0.05)',
                      boxShadow: isOpen ? '0 20px 40px rgba(0,0,0,0.5), 0 0 25px rgba(251,191,36,0.03)' : '0 10px 30px rgba(0,0,0,0.2)',
                      borderRadius: '8px',
                      padding: '28px 32px',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                      position: 'relative',
                      animation: `fadeInUp 0.6s cubic-bezier(0.25, 1, 0.5, 1) both`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {/* Top Meta Details Layer */}
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        letterSpacing: '2px',
                        color: isOpen ? '#fbbf24' : '#64748b',
                        transition: 'color 0.3s'
                      }}>
                        {item.meta}
                      </span>
                      <span style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        color: isOpen ? 'rgba(251, 191, 36, 0.15)' : 'rgba(255,255,255,0.03)',
                        transition: 'color 0.3s'
                      }}>
                        {item.id}
                      </span>
                    </div>

                    {/* Question Header Layout */}
                    <div className="d-flex align-items-center justify-content-between gap-3">
                      <h3 style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '1.15rem',
                        fontWeight: 600,
                        color: isOpen ? '#ffffff' : '#cbd5e1',
                        margin: 0,
                        lineHeight: '1.4',
                        transition: 'color 0.3s'
                      }}>
                        {item.question}
                      </h3>
                      
                      {/* Geometric Plus/Minus Indicator */}
                      <div style={{
                        width: '24px',
                        height: '24px',
                        position: 'relative',
                        flexShrink: 0,
                        transform: isOpen ? 'rotate(135deg)' : 'rotate(0deg)',
                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}>
                        <div style={{ position: 'absolute', width: '14px', height: '2px', backgroundColor: isOpen ? '#fbbf24' : '#64748b', top: '11px', left: '5px', transition: 'background-color 0.3s' }} />
                        <div style={{ position: 'absolute', width: '2px', height: '14px', backgroundColor: isOpen ? '#fbbf24' : '#64748b', top: '5px', left: '11px', transition: 'background-color 0.3s' }} />
                      </div>
                    </div>

                    {/* Answer Area Container Block */}
                    <div style={{
                      display: 'grid',
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      transition: 'grid-template-rows 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                      overflow: 'hidden'
                    }}>
                      <div style={{ minHeight: 0 }}>
                        <p style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: '0.95rem',
                          lineHeight: '1.7',
                          color: '#94a3b8',
                          margin: 0,
                          paddingTop: '20px'
                        }}>
                          {item.answer}
                        </p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Global CSS Injector Engine for Advanced Interactions */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .back-nav-link:hover {
          color: #fbbf24 !important;
          text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);
        }

        /* Baptism Image Micro-Interaction Styling */
        .baptism-image-frame:hover {
          transform: translateY(-4px);
          border-color: rgba(251, 191, 36, 0.45) !important;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.85), 0 0 40px rgba(251, 191, 36, 0.08) !important;
        }

        .baptism-image-frame:hover img {
          opacity: 1 !important;
          transform: scale(1.01);
        }

        /* Hover effects on inactive components */
        .baptism-card-wrapper:not(.card-active):hover {
          border-color: rgba(251, 191, 36, 0.2) !important;
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.4), 0 0 15px rgba(251,191,36,0.02) !important;
          background-color: rgba(14, 14, 18, 0.6) !important;
        }

        .baptism-card-wrapper:not(.card-active):hover h3 {
          color: #fbbf24 !important;
        }

        /* Micro-glow styling on expanding cards */
        .card-active::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: #fbbf24;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
          box-shadow: 0 0 10px #fbbf24;
        }
      `}</style>
    </div>
  );
};

export default WaterBaptism;