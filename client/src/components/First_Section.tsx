import React from 'react';
import { Container, Button } from 'react-bootstrap';

// Import your section background graphic safely
import eagleBg from './images/bald-eagle.png'; 

const First_Section: React.FC = () => {
  return (
    <section 
      className="first-pillar-section" 
      style={{ 
        position: 'relative',
        width: '100%',
        padding: '120px 0',
        backgroundImage: `url(${eagleBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll', /* Changes it from fixed to moving naturally with the section */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#0b0f19'
      }}
    >
      {/* High-Contrast Tint Overlay */}
      <div 
        className="first-section-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(11, 15, 25, 0.92) 0%, rgba(3, 7, 18, 0.96) 100%)',
          zIndex: 1
        }}
      ></div>

      {/* Central Content Vector */}
      <Container 
        className="text-center" 
        style={{ position: 'relative', zIndex: 2, maxWidth: '850px' }}
      >
        <div>
          
          {/* Section Main Header Title */}
          <h2 
            className="mb-3"
            style={{ 
              fontFamily: "'Cinzel', Georgia, serif", 
              fontSize: '2.8rem', 
              fontWeight: 700, 
              color: '#ffffff',
              letterSpacing: '1px',
              textShadow: '0 4px 12px rgba(0,0,0,0.7)'
            }}
          >
            Spiritual Strength & Vision
          </h2>
          
          {/* Gold Luxury Accent Splitter Divider Line */}
          <div 
            className="mx-auto mb-4" 
            style={{ 
              position: 'relative',
              width: '180px', 
              height: '1px', 
              background: 'linear-gradient(90deg, rgba(251, 191, 36, 0) 0%, #fbbf24 50%, rgba(251, 191, 36, 0) 100%)' 
            }}
          >
            <span 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(45deg)',
                width: '6px',
                height: '6px',
                backgroundColor: '#fbbf24',
                boxShadow: '0 0 8px #fbbf24'
              }}
            ></span>
          </div>

          {/* Core Descriptive Text Paragraph */}
          <p 
            className="mx-auto"
            style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontSize: '1.15rem', 
              lineHeight: '1.85', 
              color: '#cbd5e1', 
              maxWidth: '780px'
            }}
          >
            Just as the eagle mounts up to the highest heavens, we are called to rise above the storms of life. 
            Discover deeper dimensions of faith, clear spiritual vision, and the power of the original spoken Word for this generation.
          </p>

          {/* Premium Branded Action Gold Button Matrix */}
          <div className="mt-4 pt-2">
            <Button 
              className="px-5 py-2 fw-semibold"
              style={{ 
                backgroundColor: '#fbbf24', 
                border: '1px solid #fbbf24', 
                color: '#000000', 
                borderRadius: '4px', 
                letterSpacing: '1.5px',
                fontSize: '0.9rem',
                boxShadow: '0 4px 15px rgba(251, 191, 36, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#fbbf24';
                e.currentTarget.style.borderColor = '#fbbf24';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#fbbf24';
                e.currentTarget.style.color = '#000000';
                e.currentTarget.style.borderColor = '#fbbf24';
              }}
            >
              LEARN MORE
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default First_Section;