import React from 'react';
import { Container, Button } from 'react-bootstrap';
import "../styles/First_Section.css"; // Integrating the modern style file cleanly

// Import your section background graphic safely
import eagleBg from './images/bald-eagle.png'; 

const First_Section: React.FC = () => {
  return (
    <section 
      className="first-pillar-section" 
      style={{ backgroundImage: `url(${eagleBg})` }}
    >
      {/* High-Contrast Tint Overlay */}
      <div className="first-section-overlay" />

      {/* Central Content Vector */}
      <Container className="text-center first-section-container">
        <div>
          
          {/* Section Main Header Title */}
          <h2 className="mb-3 first-section-title">
            Spiritual Strength & Vision
          </h2>
          
          {/* Gold Luxury Accent Splitter Divider Line */}
          <div className="mx-auto mb-4 luxury-divider">
            <span className="luxury-divider-diamond" />
          </div>

          {/* Core Descriptive Text Paragraph */}
          <p className="mx-auto first-section-body">
            Just as the eagle mounts up to the highest heavens, we are called to rise above the storms of life. 
            Discover deeper dimensions of faith, clear spiritual vision, and the power of the original spoken Word for this generation.
          </p>

          {/* Premium Branded Action Gold Button Matrix */}
          <div className="mt-4 pt-2">
            <Button className="px-5 py-2 fw-semibold btn-learn-more">
              LEAR MORE
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default First_Section;