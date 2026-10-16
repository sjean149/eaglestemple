import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../components/NavBar'; 
import Footer from '../components/Footer'; 

// Import your images directly based on your file tree from images path.png
import BernardImg from './images/Bernard.png';
import BinceImg from './images/Bince.png';
import SenoraImg from './images/Senora.png';

interface LeaderProfile {
  name: string;
  role: string;
  imageElement: string; 
  bioEn: string;
  bioFr: string;
  accentColor: string;
  glowGradient: string;
  hoverBg: string; 
}

const Leadership: React.FC = () => {
  const leaders: LeaderProfile[] = [
    {
      name: "Bernard",
      role: "Ministry Elder & Teacher",
      imageElement: BernardImg, 
      bioEn: "Dedicated to uncovering the deep structural mysteries of the Word and guiding the body into scriptural alignment.",
      bioFr: "Dédié à la découverte des mystères structurels profonds de la Parole et à guider le corps dans l'alignement scripturaire.",
      accentColor: '#fbbf24', // Amber/Gold
      glowGradient: 'radial-gradient(circle at center, rgba(251, 191, 36, 0.15) 0%, transparent 70%)',
      hoverBg: 'linear-gradient(135deg, rgba(251, 191, 36, 0.25) 0%, rgba(251, 191, 36, 0.05) 100%)'
    },
    {
      name: "Bince",
      role: "Evangelist & Youth Director",
      imageElement: BinceImg, 
      bioEn: "Igniting a passion for the End-Time Message within the next generation through steadfast outreach and fellowship.",
      bioFr: "Allumer une passion pour le Message du Temps de la Fin au sein de la prochaine génération par une action d'évangélisation constante.",
      accentColor: '#06b6d4', // Cyan
      glowGradient: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
      hoverBg: 'linear-gradient(135deg, rgba(6, 182, 212, 0.25) 0%, rgba(6, 182, 212, 0.05) 100%)'
    },
    {
      name: "Senora",
      role: "Worship Coordinator & Administration",
      imageElement: SenoraImg, 
      bioEn: "Cultivating an atmosphere of reverent worship and ensuring operational harmony across all church milestones.",
      bioFr: "Cultiver une atmosphère d'adoration révérencieuse et assurer l'harmonie opérationnelle à travers toutes les étapes de l'église.",
      accentColor: '#a855f7', // Velvet Royal Purple
      glowGradient: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
      // Dynamic Deep Amethyst / Wine Glow
      hoverBg: 'linear-gradient(135deg, rgba(168, 85, 247, 0.25) 0%, rgba(147, 51, 234, 0.08) 50%, rgba(11, 10, 15, 0.98) 100%)'
    }
  ];

  return (
    <>
      <NavBar />

      <div 
        className="leadership-wrapper"
        style={{
          backgroundColor: '#050505',
          minHeight: '100vh',
          paddingTop: '160px',
          paddingBottom: '100px',
          color: '#e2e8f0',
          fontFamily: "'Montserrat', sans-serif",
          overflow: 'hidden'
        }}
      >
        <Container>
          {/* HEADER HERO */}
          <div className="text-center mb-5">
            <h1 style={{ fontFamily: "'Cinzel', Georgia, serif", color: '#ffffff', textShadow: '0 2px 15px rgba(255,255,255,0.15)', letterSpacing: '3px' }} className="display-4 fw-bold mb-3">
              CHURCH LEADERSHIP
            </h1>
            <h5 style={{ color: '#fbbf24', letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
              Direction de l'Église
            </h5>
            <div className="mx-auto my-4" style={{ width: '120px', height: '2px', background: 'linear-gradient(90deg, transparent, #fbbf24, transparent)', boxShadow: '0 0 10px #fbbf24' }} />
          </div>

          {/* LEADERS GRID LAYOUT */}
          <Row className="g-5 justify-content-center">
            {leaders.map((leader, index) => (
              <Col key={index} lg={4} md={6} className="d-flex">
                <div className="leader-card-container w-100">
                  
                  {/* Outer Frame Wrapper injected with Dynamic Variables */}
                  <div 
                    className="leader-card-frame" 
                    style={{ 
                      '--card-accent': leader.accentColor, 
                      '--card-hover-bg': leader.hoverBg 
                    } as React.CSSProperties}
                  >
                    
                    {/* Visual Corner Accents */}
                    <div className="corner-bracket top-left" style={{ borderColor: leader.accentColor }} />
                    <div className="corner-bracket bottom-right" style={{ borderColor: leader.accentColor }} />
                    
                    {/* Ambient Glow Backdrop behind the picture */}
                    <div className="avatar-ambient-glow" style={{ background: leader.glowGradient }} />

                    <div className="leader-card-inner text-center">
                      
                      {/* PERFECTLY ROUNDED AVATAR ENGINE */}
                      <div className="avatar-wrapper-circle mx-auto mb-4" style={{ '--accent-glow': leader.accentColor } as React.CSSProperties}>
                        <img 
                          src={leader.imageElement} 
                          alt={leader.name} 
                          className="leader-avatar-img"
                        />
                      </div>

                      {/* LEADER META INFO */}
                      <h3 className="leader-name mb-1">{leader.name}</h3>
                      <div className="leader-role mb-4" style={{ color: leader.accentColor }}>
                        {leader.role}
                      </div>

                      <hr className="divider-line my-3" />

                      {/* BILINGUAL PROFILE DESCRIPTIONS */}
                      <div className="bio-block mb-3">
                        <span className="small text-muted d-block text-start mb-1">🇺🇸 English</span>
                        <p className="bio-text">{leader.bioEn}</p>
                      </div>

                      <div className="bio-block">
                        <span className="small text-muted d-block text-start mb-1">🇫🇷 Français</span>
                        <p className="bio-text input-fr">{leader.bioFr}</p>
                      </div>

                    </div>
                  </div>

                </div>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Scoped CSS Style Layout for Leadership UI */}
        <style>{`
          .leader-card-container {
            perspective: 1000px;
          }

          .leader-card-frame {
            position: relative;
            background: rgba(15, 15, 18, 0.6);
            border-radius: 12px;
            padding: 2px; 
            height: 100%;
            z-index: 1;
            transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          /* Full Border Outline Visible on Load */
          .leader-card-frame::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            border-radius: 12px;
            padding: 2px; 
            background: var(--card-accent); 
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
            z-index: -1;
            opacity: 0.75; 
            transition: opacity 0.5s ease;
          }

          /* Inner Content Layout Base */
          .leader-card-inner {
            background: #0b0b0e;
            border-radius: 11px; 
            padding: 40px 28px;
            height: 100%;
            display: flex;
            flex-direction: column;
            z-index: 2;
            transition: background 0.6s cubic-bezier(0.4, 0, 0.2, 1); 
          }

          /* PERFECTLY ROUNDED PROFILE PORTRAITS */
          .avatar-wrapper-circle {
            position: relative;
            width: 160px;
            height: 160px;
            border-radius: 50%;
            padding: 4px; 
            background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05));
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
            transition: transform 0.5s ease, background 0.5s ease;
          }

          .leader-avatar-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%; 
            background-color: #1a1a24;
          }

          .avatar-ambient-glow {
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 220px;
            height: 220px;
            opacity: 0.4;
            pointer-events: none;
            z-index: -1;
            transition: opacity 0.5s ease;
          }

          .leader-name {
            font-family: 'Cinzel', Georgia, serif;
            font-size: 1.5rem;
            font-weight: 700;
            letter-spacing: 1px;
            color: #ffffff;
          }

          .leader-role {
            font-size: 0.85rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1.5px;
          }

          .divider-line {
            border-top: 1px solid rgba(255, 255, 255, 0.15);
            opacity: 1;
          }

          .bio-text {
            font-size: 0.92rem;
            line-height: 1.6;
            color: #94a3b8;
            text-align: left;
            margin-bottom: 0;
            transition: color 0.5s ease;
          }

          .bio-text.input-fr {
            color: #cbd5e1;
          }

          .corner-bracket {
            position: absolute;
            width: 12px;
            height: 12px;
            border: 2px solid transparent;
            pointer-events: none;
            z-index: 3;
            transition: all 0.4s ease;
          }
          .corner-bracket.top-left {
            top: -1px; left: -1px;
            border-right: none; border-bottom: none;
            border-top-left-radius: 12px;
          }
          .corner-bracket.bottom-right {
            bottom: -1px; right: -1px;
            border-left: none; border-top: none;
            border-bottom-right-radius: 12px;
          }
          
          /* ======================================================= */
          /* HOVER HIGHLIGHT EFFECTS                                 */
          /* ======================================================= */

          .leader-card-frame:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
          }

          /* Highlights the entire background of the card dynamically */
          .leader-card-frame:hover .leader-card-inner {
            background: var(--card-hover-bg);
          }

          .leader-card-frame:hover::before {
            opacity: 1; 
            box-shadow: inset 0 0 12px var(--card-accent);
          }

          .leader-card-frame:hover .bio-text {
            color: #f8fafc; 
          }

          .leader-card-frame:hover .avatar-wrapper-circle {
            transform: scale(1.04);
            background: var(--card-accent);
            box-shadow: 0 0 20px var(--card-accent);
          }

          .leader-card-frame:hover .corner-bracket {
            width: 20px;
            height: 20px;
            box-shadow: 0 0 8px var(--card-accent);
          }
        `}</style>
      </div>

      <Footer />
    </>
  );
};

export default Leadership;