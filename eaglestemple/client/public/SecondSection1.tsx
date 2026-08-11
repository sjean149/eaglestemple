import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './SecondSection.css';
import EaglePic from './images/bald-eagle.png'; // Make sure your eagle image is in your images folder

const SecondSection = () => {
  return (
    <section className="second-section">
      <Container>
        <Row className="align-items-center justify-content-center">
          
          {/* LEFT SIDE: BALD EAGLE PICTURE */}
          <Col md={5} className="text-center text-md-start mb-4 mb-md-0">
            <div className="eagle-image-wrapper">
              <img 
                src={EaglePic} 
                alt="Bald Eagle" 
                className="eagle-image"
              />
            </div>
          </Col>

          {/* RIGHT SIDE: CENTERED CONTENT & BUTTON */}
          <Col md={7} className="text-center d-flex flex-column align-items-center">
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
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default SecondSection;