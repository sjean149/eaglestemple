import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css'; // Removed the self-import line that caused the crash

const About = () => {
  return (
    <div className="about-page-wrapper">
      {/* Hero Banner Section */}
      <div className="about-hero">
        <div className="hero-overlay"></div>
        <Container className="text-center position-relative z-index-2">
          <h1 className="display-4 text-uppercase tracking-wider fw-bold text-white">
            About <span className="text-gold">Eagles Temple</span>
          </h1>
          <p className="lead text-light-muted max-w-2xl mx-auto mt-3">
            "For wheresoever the carcass is, there will the eagles be gathered together." — Matthew 24:28
          </p>
        </Container>
      </div>

      <Container className="py-5 my-4">
        {/* Main Welcome & Core Mission */}
        <Row className="justify-content-center mb-5">
          <Col lg={10}>
            <Card className="theme-card main-welcome-card border-0 shadow-lg text-center p-4 p-md-5">
              <Card.Body>
                <div className="section-icon mb-3">🦅</div>
                <h2 className="section-title text-white mb-4">Welcome to Eagles Temple</h2>
                <p className="welcome-text text-light">
                  Thank you for taking the time to learn more about our faith community. 
                  Our church is centered in our mission of **making disciples of Jesus Christ who will love God, love others, and serve the world.**
                </p>
                
                {/* Multi-lingual Language Badges */}
                <div className="language-bar d-flex justify-content-center gap-3 mt-4 flex-wrap">
                  <span className="lang-badge">English</span>
                  <span className="lang-badge">Français</span>
                  <span className="lang-badge">Kreyòl</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* The Message & Prophetic Timeline Section */}
        <Row className="align-items-stretch g-4 mb-5">
          <Col md={6}>
            <div className="theme-card h-100 p-4 p-md-5 border-0 rounded-4 position-relative overflow-hidden message-gradient-card">
              <h3 className="text-gold mb-3 h4 text-uppercase tracking-wide">The Bride's Preparation</h3>
              <p className="text-light opacity-90 leading-relaxed">
                Whether you speak English, French, or Creole, we cordially welcome you to God's message brought forth by <strong>William Branham</strong> for preparing the church-bride to meet our divine Lord Jesus Christ in the air before fire consumes the world in the impending Third World War <em>(2 Pe 3:7, 10)</em>.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="theme-card h-100 p-4 p-md-5 border-0 rounded-4 history-timeline-card">
              <h3 className="text-gold mb-3 h4 text-uppercase tracking-wide">God's Pattern of Grace</h3>
              <p className="text-light opacity-90 leading-relaxed small-text-spacing">
                Before judgment strikes, God always offers grace. He sent Noah as a prophet to warn the world of a flood. Yet, except for Noah and his family, all the antediluvians perished for not taking heed. Sodom and Gomorrah were destroyed by fire for ignoring God's call to repentance.
              </p>
              <p className="text-light opacity-90 leading-relaxed mt-3 border-top-gold pt-3">
                In this end time, God sent a prophet <strong>(William Marrion Branham)</strong> with a message of grace to prepare His true church-bride for the rapture before fire destroys the Earth <em>(Lu 17:26-30)</em>.
              </p>
            </div>
          </Col>
        </Row>

        {/* What We Do / Missions Section */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="mission-strip text-center p-4 rounded-4 position-relative overflow-hidden">
              <div className="ambient-glow"></div>
              <h3 className="text-white text-uppercase tracking-wide mb-3">What We Do</h3>
              <p className="text-gold fw-semibold fs-5 mb-2">
                "We serve the Lord and His people around the world."
              </p>
              <p className="text-light max-w-xl mx-auto mb-0 opacity-90">
                We conduct several global missions to support and elevate the less fortunate, focusing our heart and hands especially on the communities of <strong>Haiti</strong>.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;