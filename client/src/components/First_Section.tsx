import React from 'react';
import { Button } from 'react-bootstrap';
import './HeroSection.css';

const First_Section = () => {
  return (
    <section className="second-section">
      {/* Dark background protection curtain layout mask */}
      <div className="second-section-overlay"></div>
      
      {/* Content wrapper asset targeting */}
      <div className="text-column-wrapper">
        <h2 className="second-section-title">
          Spiritual Strength & Vision
        </h2>
        <p className="second-section-description">
          Just as the eagle mounts up to the highest heavens, we are called to rise 
          above the storms of life. Discover deeper dimensions of faith, clear spiritual 
          vision, and the power of the original spoken Word for this generation.
        </p>
        <Button 
          variant="primary" 
          className="second-learn-more-btn"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default First_Section;