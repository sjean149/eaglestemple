import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="luxury-footer" style={{backgroundColor:'#6495ED'}}>
      {/* Decorative top border bar */}
      <div className="footer-gold-gradient-bar"></div>

      <Container className="footer-content-wrap">
        <Row className="gy-5 justify-content-between">
          
          {/* Column 1: Identity / Branding */}
          <Col lg={4} md={12} className="footer-brand-column text-center text-lg-start">
            <h3 className="footer-logo-title">EAGLES TEMPLE</h3>
            <p className="footer-brand-tagline">
              Preaching the original faith and the restored Spoken Word of this hour.
            </p>
            <div className="footer-social-icons d-flex justify-content-center justify-content-lg-start gap-3">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link"
                aria-label="Eagles Temple Facebook Page"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link"
                aria-label="Eagles Temple Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </Col>

          {/* Column 2: Contact Information */}
          <Col lg={4} md={6} className="text-center text-md-start">
            <h5 className="footer-heading">CONTACT US</h5>
            <ul className="footer-contact-list list-unstyled">
              {/* Address Line */}
              <li className="d-flex align-items-start gap-3 justify-content-center justify-content-md-start">
                <svg className="contact-icon mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>13525 NE 2nd Ct,<br />North Miami, FL 33161</span>
              </li>
              
              {/* Phone Line */}
              <li className="d-flex align-items-center gap-3 justify-content-center justify-content-md-start mt-3">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:7869534085" className="contact-link">(786) 953-4085</a>
              </li>

              {/* Email Line - Dedicated New Row */}
              <li className="d-flex align-items-center gap-3 justify-content-center justify-content-md-start mt-3">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:eaglestemple2220@yahoo.com" className="contact-link">eaglestemple2220@yahoo.com</a>
              </li>
            </ul>
          </Col>

          {/* Column 3: Quick Links */}
          <Col lg={3} md={6} className="text-center text-md-start">
            <h5 className="footer-heading">NAVIGATION</h5>
            <ul className="footer-links-list list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#sermons">Sermon Pillars</a></li>
              <li><a href="#about">Our Faith</a></li>
              <li><a href="#contact">Get In Touch</a></li>
            </ul>
          </Col>

        </Row>

        <hr className="footer-divider" />

        {/* Bottom Bar Container */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="copyright-text">
            &copy; {currentYear} <span className="gold-text">Eagles Temple</span>. All Rights Reserved.
          </p>
          <p className="developer-signature">
            Designed with excellence
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;