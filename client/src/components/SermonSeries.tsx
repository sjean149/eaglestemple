import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './SermonSeries.css';

// Import graphics securely
import eagleBg from './images/bald-eagle.png'; // Top Banner Image
import bg1 from './images/eaglestemple1.jpg';   // For Sunday School
import bg2 from './images/eaglestemple2.png';   // For Bible Study
import bg3 from './images/eaglestemple3.png';   // For Our Doctrines

const SermonSeries: React.FC = () => {
  const topBannerStyle = { backgroundImage: `url(${eagleBg})` };
  const bgSunday = { backgroundImage: `url(${bg1})` };
  const bgBible = { backgroundImage: `url(${bg2})` };
  const bgDoctrines = { backgroundImage: `url(${bg3})` };

  return (
    <section className="sermon-series-section">
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>

      <Container>
        {/* Section Header */}
        <div className="sermon-section-header text-center">
          <h6 className="sermon-subtitle">THE SPOKEN WORD FOR THIS HOUR</h6>
          <h2 className="sermon-main-title">Spiritual Pillars & Fellowship</h2>
          <div className="sermon-title-luxury-line">
            <span className="diamond-spark"></span>
          </div>
        </div>

        <Row className="justify-content-center g-5">
          {/* Card 1: SUNDAY SCHOOL */}
          <Col lg={4} md={6} sm={12}>
            <Card className="luxury-msg-card interactive-luxury-card h-100">
              <Card.Body className="d-flex flex-column align-items-center text-center p-0 luxury-card-content">
                
                {/* FIRST SECTION: Bald Eagle Graphic Banner */}
                <div className="card-top-header-banner" style={topBannerStyle}>
                  <div className="banner-image-tint-overlay"></div>
                  
                  <div className="luxury-icon-wrapper">
                    <div className="icon-pulse-ring"></div>
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 45C35 45 45 58 50 63C55 58 65 45 80 45M10 28C25 18 45 38 50 45C55 38 75 18 90 28M25 78H75" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M50 38V78M32 53H44M32 61H42M56 53H68M58 61H68" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="50" cy="25" r="3" fill="#fbbf24" />
                    </svg>
                  </div>
                  <Card.Title className="luxury-card-title">SUNDAY SCHOOL</Card.Title>
                  <p className="luxury-card-divider-text">SEVEN SEALS MYSTERIES</p>
                </div>
                
                {/* SECOND SECTION: Clear, Isolated Visual Image Frame */}
                <div className="card-middle-media-wrapper">
                  <div className="card-luxury-image-bg" style={bgSunday}></div>
                  <div className="card-luxury-overlay"></div>
                </div>

                {/* THIRD SECTION: Text Description Below the Image */}
                <div className="card-bottom-text-container">
                  <Card.Text className="luxury-card-text">
                    Exploring the Seven Seals & Prophetic Revelations for all ages. Join us weekly for deep, insightful lessons that unlock original bible truths.
                  </Card.Text>
                </div>

                <Button className="luxury-card-btn mt-auto">
                  <span>LEARN MORE</span>
                  <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Button>

              </Card.Body>
            </Card>
          </Col>

          {/* Card 2: BIBLE STUDY */}
          <Col lg={4} md={6} sm={12}>
            <Card className="luxury-msg-card interactive-luxury-card h-100">
              <Card.Body className="d-flex flex-column align-items-center text-center p-0 luxury-card-content">
                
                {/* FIRST SECTION: Bald Eagle Graphic Banner */}
                <div className="card-top-header-banner" style={topBannerStyle}>
                  <div className="banner-image-tint-overlay"></div>

                  <div className="luxury-icon-wrapper">
                    <div className="icon-pulse-ring"></div>
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M40 38H70M40 48H65M40 58H60M32 28V73C32 78 36 81 42 81H72C76 81 80 77 80 73V38C80 33 76 28 72 28H42" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 68C25 68 30 58 28 51C26 45 18 48 22 38C26 45 34 43 32 51C30 58 35 68 45 68" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"/>
                      <circle cx="25" cy="35" r="2" fill="#fbbf24" />
                    </svg>
                  </div>
                  <Card.Title className="luxury-card-title">BIBLE STUDY</Card.Title>
                  <p className="luxury-card-divider-text">THE SPOKEN WORD</p>
                </div>
                
                {/* SECOND SECTION: Clear, Isolated Visual Image Frame */}
                <div className="card-middle-media-wrapper">
                  <div className="card-luxury-image-bg" style={bgBible}></div>
                  <div className="card-luxury-overlay"></div>
                </div>

                {/* THIRD SECTION: Text Description Below the Image */}
                <div className="card-bottom-text-container">
                  <Card.Text className="luxury-card-text">
                    Deep Dive into the Spoken Word. Weekly spiritual teachings focused meticulously on structural, localized growth and message foundation.
                  </Card.Text>
                </div>

                <Button className="luxury-card-btn mt-auto">
                  <span>LEARN MORE</span>
                  <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Button>

              </Card.Body>
            </Card>
          </Col>

          {/* Card 3: OUR DOCTRINES */}
          <Col lg={4} md={6} sm={12}>
            <Card className="luxury-msg-card interactive-luxury-card h-100">
              <Card.Body className="d-flex flex-column align-items-center text-center p-0 luxury-card-content">
                
                {/* FIRST SECTION: Bald Eagle Graphic Banner */}
                <div className="card-top-header-banner" style={topBannerStyle}>
                  <div className="banner-image-tint-overlay"></div>

                  <div className="luxury-icon-wrapper">
                    <div className="icon-pulse-ring"></div>
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 38C30 33 45 45 50 51C55 45 70 33 85 38C70 48 65 63 50 68C35 63 30 48 15 38Z" stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="round"/>
                      <path d="M45 51C45 51 48 43 50 45C52 43 55 51 55 51" stroke="#ffffff" strokeWidth="2"/>
                      <path d="M42 81C46 75 45 71 50 71C55 71 54 75 58 81H42Z" fill="#fbbf24" stroke="#fbbf24" strokeWidth="1.5"/>
                      <circle cx="50" cy="25" r="6" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 2" />
                    </svg>
                  </div>
                  <Card.Title className="luxury-card-title">OUR DOCTRINES</Card.Title>
                  <p className="luxury-card-divider-text">THE ORIGINAL FAITH</p>
                </div>
                
                {/* SECOND SECTION: Clear, Isolated Visual Image Frame */}
                <div className="card-middle-media-wrapper">
                  <div className="card-luxury-image-bg" style={bgDoctrines}></div>
                  <div className="card-luxury-overlay"></div>
                </div>

                {/* THIRD SECTION: Text Description Below the Image */}
                <div className="card-bottom-text-container">
                  <Card.Text className="luxury-card-text">
                    The Pillars of Our Faith. Learn about the perfect structural restoration of original scriptural truths brought to light in this generation.
                  </Card.Text>
                </div>

                <Button className="luxury-card-btn mt-auto">
                  <span>LEARN MORE</span>
                  <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Button>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SermonSeries;