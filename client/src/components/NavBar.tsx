import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './images/logo.jpg';

const NavBar: React.FC = () => {
  // Common style object for top-level navigation links
  const navLinkStyle = {
    color: '#e2e8f0',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '1.05rem',
    fontWeight: 500,
    letterSpacing: '0.5px',
    padding: '8px 12px',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block'
  };

  // Upgraded Wide Mega Menu Block style
  const megaMenuBlockStyle = {
    backgroundColor: 'rgba(10, 10, 12, 0.98)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(251, 191, 36, 0.2)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.8)',
    borderRadius: '8px',
    padding: '24px',
    marginTop: '10px',
    width: '520px', // Extra wide to support beautiful side-by-side structures cleanly
    left: '50%',
    transform: 'translateX(-50%)'
  };

  const handleTextHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#fbbf24';
  };

  const handleTextLeave = (e: React.MouseEvent<HTMLAnchorElement>, defaultColor = '#e2e8f0') => {
    e.currentTarget.style.color = defaultColor;
  };

  return (
    <Navbar 
      expand="xl" 
      variant="dark" 
      fixed="top"
      className="py-3"
      style={{ 
        backgroundColor: 'rgba(5, 5, 5, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(251, 191, 36, 0.15)',
        boxShadow: '0 4px 25px rgba(0, 0, 0, 0.6)'
      }}
    >
      <Container fluid="lg">
        {/* Brand Group Layout Vector */}
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="d-flex align-items-center gap-3" 
          style={{ fontFamily: "'Cinzel', Georgia, serif", color: '#ffffff', fontWeight: 700, fontSize: '1.4rem', textDecoration: 'none' }}
        >
          <img 
            src={logo} 
            alt="Eagles Temple Logo" 
            width="46" 
            height="46" 
            className="rounded-circle" 
            style={{ border: '1px solid rgba(251, 191, 36, 0.4)', boxShadow: '0 0 12px rgba(251, 191, 36, 0.2)' }}
          />
          <span style={{ letterSpacing: '2px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>EAGLES TEMPLE</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />
        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-3">
            
            {/* HOME LINK */}
            <Nav.Link 
              as={Link}
              to="/" 
              style={navLinkStyle}
              onMouseEnter={handleTextHover}
              onMouseLeave={(e) => handleTextLeave(e, '#e2e8f0')}
            >
              Home
            </Nav.Link>

            {/* MEDIA & SERMONS DROPDOWN */}
            <NavDropdown title="Media" id="media-dropdown" style={navLinkStyle} className="custom-nav-dropdown">
              <div style={{ ...megaMenuBlockStyle, width: '320px', padding: '12px 8px' }}>
                <NavDropdown.Item href="#sermons" className="d-flex align-items-start gap-3 py-2 px-3 custom-drop-item" style={{ color: '#ffffff', transition: 'all 0.2s' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><line x1="12" x12="12" y1="19" y2="22"/></svg>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', fontFamily: 'Montserrat' }}>Sermon Archive</div>
                    <small style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Watch and listen to inspired spoken Word</small>
                  </div>
                </NavDropdown.Item>
                
                <NavDropdown.Item href="#streams" className="d-flex align-items-start gap-3 py-2 px-3 custom-drop-item" style={{ color: '#ffffff', transition: 'all 0.2s' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', fontFamily: 'Montserrat' }}>Live Broadcast</div>
                    <small style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Stream current services in real-time</small>
                  </div>
                </NavDropdown.Item>
              </div>
            </NavDropdown>

            {/* HIGH-STYLE NESTED MEGA MENU FOR OUR FAITH */}
            <NavDropdown title="Our Faith" id="faith-dropdown" style={navLinkStyle} className="custom-nav-dropdown position-relative">
              <div style={megaMenuBlockStyle} className="mega-menu-container">
                <div className="row">
                  
                  {/* LEFT COLUMN: MAIN PAGES */}
                  <div className="col-5 border-end border-secondary border-opacity-25 pe-3">
                    <div className="menu-section-label">General</div>
                    
                    <Link to="/about" className="mega-nav-card mt-2">
                      <div className="mega-card-icon">🦅</div>
                      <div>
                        <div className="mega-card-title">About Us</div>
                        <div className="mega-card-desc">Our mission, vision, and structural timeline</div>
                      </div>
                    </Link>

                    <a href="#leadership" className="mega-nav-card mt-3">
                      <div className="mega-card-icon">👑</div>
                      <div>
                        <div className="mega-card-title">Leadership</div>
                        <div className="mega-card-desc">Meet the pastors and advocates serving you</div>
                      </div>
                    </a>
                  </div>

                  {/* RIGHT COLUMN: DEDICATED DOCTRINE SUB-MENU */}
                  <div className="col-7 ps-4">
                    <div className="menu-section-label">Doctrine Foundations</div>
                    <div className="doctrine-links-grid mt-2">
                      
                      {/* WATER BAPTISM LINK */}
                      <Link to="/doctrine/water-baptism" className="doctrine-sub-item active-doc">
                        <span className="doc-bullet">✦</span> 
                        <div>
                          <div className="doc-name">Water Baptism</div>
                          <small className="doc-meta">Full Immersion Statement</small>
                        </div>
                      </Link>

                      {/* ORIGINAL SIN LINK (NOW LIVE & CLICKABLE) */}
                      <Link to="/doctrine/original-sin" className="doctrine-sub-item active-doc">
                        <span className="doc-bullet">✦</span>
                        <div>
                          <div className="doc-name">The Original Sin</div>
                          <small className="doc-meta">The Truth Revealed</small>
                        </div>
                      </Link>

                      {/* PLACEHOLDERS */}
                      <div className="doctrine-sub-item disabled-doc">
                        <span className="doc-bullet">✦</span>
                        <div>
                          <div className="doc-name">The Truth about Sabbath</div>
                          <small className="doc-meta">Coming Soon</small>
                        </div>
                      </div>

                      <div className="doctrine-sub-item disabled-doc">
                        <span className="doc-bullet">✦</span>
                        <div>
                          <div className="doc-name">The Seven Messengers</div>
                          <small className="doc-meta">Coming Soon</small>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </NavDropdown>

            {/* MINISTRIES DROPDOWN */}
            <NavDropdown title="Ministries" id="ministries-dropdown" style={navLinkStyle} className="custom-nav-dropdown">
              <div style={{ ...megaMenuBlockStyle, width: '320px', padding: '12px 8px' }}>
                <NavDropdown.Item href="#children" className="d-flex align-items-start gap-3 py-2 px-3 custom-drop-item" style={{ color: '#ffffff', transition: 'all 0.2s' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', fontFamily: 'Montserrat' }}>Youth & Children</div>
                    <small style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Curriculum-based faith foundations</small>
                  </div>
                </NavDropdown.Item>
                
                <NavDropdown.Item href="#outreach" className="d-flex align-items-start gap-3 py-2 px-3 custom-drop-item" style={{ color: '#ffffff', transition: 'all 0.2s' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', fontFamily: 'Montserrat' }}>Global Outreach</div>
                    <small style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Spreading spiritual strength and wisdom</small>
                  </div>
                </NavDropdown.Item>
              </div>
            </NavDropdown>

            {/* JOIN US CTA BUTTON */}
            <Nav.Link 
              href="#contact" 
              style={{ 
                color: '#fbbf24', 
                fontFamily: "'Montserrat', sans-serif", 
                fontSize: '0.95rem',
                fontWeight: 600, 
                letterSpacing: '1px',
                border: '1px solid rgba(251, 191, 36, 0.6)',
                padding: '10px 26px',
                borderRadius: '4px',
                marginLeft: '10px',
                backgroundColor: 'rgba(251, 191, 36, 0.02)',
                transition: 'all 0.3s ease-in-out',
                boxShadow: '0 2px 10px rgba(251, 191, 36, 0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fbbf24';
                e.currentTarget.style.color = '#000000';
                e.currentTarget.style.borderColor = '#fbbf24';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(251, 191, 36, 0.35)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(251, 191, 36, 0.02)';
                e.currentTarget.style.color = '#fbbf24';
                e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.6)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(251, 191, 36, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              JOIN US
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Embedded CSS Engine for Stunning Mega Menu Aesthetics */}
      <style>{`
        /* OBLITERATE THE NATIVE WHITE BACKGROUND CONTAINER DROPDOWN LAYER */
        .custom-nav-dropdown .dropdown-menu {
          background-color: transparent !important;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
          margin: 0 !important;
          min-width: auto !important;
        }

        /* FORCED BOOTSTRAP OVERRIDES: Removes focus/active link highlighting backgrounds */
        .custom-nav-dropdown .dropdown-menu .dropdown-item:focus,
        .custom-nav-dropdown .dropdown-menu .dropdown-item:active,
        .custom-nav-dropdown .dropdown-menu .dropdown-item:hover,
        .mega-nav-card:focus,
        .mega-nav-card:active,
        .doctrine-sub-item:focus,
        .doctrine-sub-item:active {
          background-color: transparent !important;
          background: transparent !important;
          color: inherit !important;
          outline: none !important;
          box-shadow: none !important;
        }

        /* Interaction layout controls */
        .custom-nav-dropdown .dropdown-toggle::after {
          color: #fbbf24 !important;
          margin-left: 6px;
          transition: transform 0.3s ease;
        }
        
        .custom-nav-dropdown:hover .dropdown-toggle::after {
          transform: rotate(180deg);
        }

        .custom-drop-item:hover {
          background-color: rgba(251, 191, 36, 0.08) !important;
          color: #fbbf24 !important;
        }

        /* Mega menu inner layouts */
        .menu-section-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #fbbf24;
          font-weight: 700;
          border-bottom: 1px solid rgba(251, 191, 36, 0.15);
          padding-bottom: 6px;
          margin-bottom: 12px;
        }

        .mega-nav-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .mega-nav-card:hover {
          background-color: rgba(251, 191, 36, 0.05) !important;
        }
        
        .mega-card-icon {
          font-size: 1.2rem;
          background: rgba(251, 191, 36, 0.1);
          padding: 4px 8px;
          border-radius: 4px;
        }
        
        .mega-card-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          color: #ffffff;
        }
        
        .mega-nav-card:hover .mega-card-title {
          color: #fbbf24;
        }
        
        .mega-card-desc {
          font-size: 0.78rem;
          color: #94a3b8;
          line-height: 1.3;
          margin-top: 2px;
        }

        /* Doctrine list grid styling */
        .doctrine-links-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .doctrine-sub-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 8px 12px;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .active-doc {
          cursor: pointer;
        }
        
        .active-doc:hover {
          background: rgba(251, 191, 36, 0.08) !important;
          transform: translateX(4px);
        }
        
        .doc-bullet {
          color: rgba(251, 191, 36, 0.4);
          font-size: 0.8rem;
          margin-top: 2px;
        }
        
        .active-doc:hover .doc-bullet {
          color: #fbbf24;
        }
        
        .doc-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: #e2e8f0;
        }
        
        .active-doc:hover .doc-name {
          color: #fbbf24;
        }
        
        .doc-meta {
          display: block;
          font-size: 0.72rem;
          color: #64748b;
        }
        
        .disabled-doc {
          opacity: 0.4;
          cursor: not-allowed;
        }
      `}</style>
    </Navbar>
  );
};

export default NavBar;