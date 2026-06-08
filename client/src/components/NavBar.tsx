import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from './images/logo.jpg';

const NavBar: React.FC = () => {
  // Common style object for top-level navigation links to ensure consistency
  const navLinkStyle = {
    color: '#e2e8f0',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '1.05rem',
    fontWeight: 500,
    letterSpacing: '0.5px',
    padding: '8px 12px',
    transition: 'all 0.3s ease',
  };

  // Dropdown style adjustments to clear default Bootstrap background weights
  const dropdownMenuBlockStyle = {
    backgroundColor: 'rgba(10, 10, 12, 0.98)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(251, 191, 36, 0.2)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7)',
    borderRadius: '6px',
    padding: '12px 8px',
    marginTop: '10px'
  };

  // Shared function to apply golden hover effects smoothly to the text links
  const handleTextHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#fbbf24';
  };

  const handleTextLeave = (e: React.MouseEvent<HTMLAnchorElement>, defaultColor = '#e2e8f0') => {
    e.currentTarget.style.color = defaultColor;
  };

  return (
    <Navbar 
      expand="xl" /* Upgraded to xl to accommodate advanced dropdown layouts cleanly on tablets */
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
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-3" style={{ fontFamily: "'Cinzel', Georgia, serif", color: '#ffffff', fontWeight: 700, fontSize: '1.4rem' }}>
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
            
            {/* HOME */}
            <Nav.Link 
              href="#home" 
              style={navLinkStyle}
              onMouseEnter={handleTextHover}
              onMouseLeave={(e) => handleTextLeave(e, '#e2e8f0')}
            >
              Home
            </Nav.Link>

            {/* MEDIA & SERMONS DROPDOWN */}
            <NavDropdown 
              title="Media" 
              id="media-dropdown"
              style={navLinkStyle}
              className="custom-nav-dropdown"
              renderMenuOnMount={true}
            >
              <div style={dropdownMenuBlockStyle}>
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

            {/* OUR FAITH DROPDOWN */}
            <NavDropdown 
              title="Our Faith" 
              id="faith-dropdown"
              style={navLinkStyle}
              className="custom-nav-dropdown"
            >
              <div style={dropdownMenuBlockStyle}>
                <NavDropdown.Item href="#about" className="d-flex align-items-start gap-3 py-2 px-3 custom-drop-item" style={{ color: '#ffffff', transition: 'all 0.2s' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', fontFamily: 'Montserrat' }}>Beliefs & Doctrine</div>
                    <small style={{ color: '#94a3b8', fontSize: '0.8rem' }}>The absolute truth of the original Word</small>
                  </div>
                </NavDropdown.Item>
                
                <NavDropdown.Item href="#leadership" className="d-flex align-items-start gap-3 py-2 px-3 custom-drop-item" style={{ color: '#ffffff', transition: 'all 0.2s' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', fontFamily: 'Montserrat' }}>Our Leadership</div>
                    <small style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Meet the pastors and advocates serving you</small>
                  </div>
                </NavDropdown.Item>
              </div>
            </NavDropdown>

            {/* MINISTRIES DROPDOWN */}
            <NavDropdown 
              title="Ministries" 
              id="ministries-dropdown"
              style={navLinkStyle}
              className="custom-nav-dropdown"
            >
              <div style={dropdownMenuBlockStyle}>
                <NavDropdown.Item href="#children" className="d-flex align-items-start gap-3 py-2 px-3 custom-drop-item" style={{ color: '#ffffff', transition: 'all 0.2s' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" x12="6" y1="2" y2="4"/><line x1="10" x12="10" y1="2" y2="4"/><line x1="14" x12="14" y1="2" y2="4"/></svg>
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

            {/* HIGH ELEGANCE CTA BUTTON (JOIN US) */}
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

      {/* Global CSS Injector to safely force Bootstrap drop-items to change colors beautifully on hover */}
      <style>{`
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
        }
      `}</style>
    </Navbar>
  );
};

export default NavBar;