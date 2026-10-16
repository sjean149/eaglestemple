import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "./images/logo.jpg";
import "../styles/NavBar.css"; 

export default function NavBar() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const submenus = [
    { name: "Water Baptism", path: "/water-baptism", icon: "🌊", desc: "The burial of the old life" },
    { name: "Original Sin", path: "/original-sin", icon: "📖", desc: "Unveiling the Edenic mystery" },
    { name: "The Godhead", path: "/the-godhead", icon: "🕊️", desc: "The supreme mystery revealed" },
    { name: "The Spoken Word", path: "/spoken-word", icon: "🗣️", desc: "The seed for this hour" }
  ];

  return (
    <nav className="navbar-container">
      <div className="navbar-inner">
        
        {/* Left Side: Logo & Brand Title */}
        <Link to="/" className="navbar-brand">
          <div className="logo-wrapper">
            <img src={logoImg} alt="Eagles Temple Logo" className="logo-img" />
          </div>
          <span className="brand-title">EAGLES TEMPLE</span>
        </Link>

        {/* Right Side: Navigation Links */}
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/water-baptism" className="nav-link">Sermons</Link>
          
          {/* Dropdown Trigger Wrapper */}
          <div 
            className="dropdown-trigger"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className={`dropdown-label ${dropdownOpen ? "open" : ""}`}>
              Our Faith 
              <span className={`arrow-icon ${dropdownOpen ? "open" : ""}`}>▼</span>
            </span>

            {/* Submenu Dropdown Panel */}
            {dropdownOpen && (
              <div className="dropdown-panel">
                <div className="panel-arrow" />

                {submenus.map((sub, i) => (
                  <Link key={i} to={sub.path} className="submenu-card">
                    {/* Circle Badge Wrapper for Icons */}
                    <div className="icon-badge">
                      <span className="badge-icon">{sub.icon}</span>
                    </div>
                    
                    {/* Balanced Typography Stack */}
                    <div className="text-stack">
                      <span className="submenu-title">{sub.name}</span>
                      <span className="submenu-desc">{sub.desc}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <span onClick={() => navigate('/')} className="join-btn">
            Join Us
          </span>
        </div>

      </div>
    </nav>
  );
}