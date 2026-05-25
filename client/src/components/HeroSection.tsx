import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './HeroSection.css'; // Import the custom styles below

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Animated Background Video */}
      <video className="hero-bg-video" autoPlay loop muted playsInline>
        <source src="https://cdn.coverr.co/videos/coverr-cinematic-snowy-mountains-7615/720p.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for Contrast */}
      <div className="hero-overlay"></div>

      {/* Foreground Content */}
      <Container className="hero-content text-center text-white">
        <h1 className="display-3 fw-bold">Welcome to Eagles Temple</h1><br/>
        <h2>
          MT 24:28 "Where the Carcass, there the Eagles Shall Gather".<br/> The carcass is the revealed word of the 
          hour which is the End-Time message. Join us to learn more.
        </h2>
        <Button variant="primary" size="lg" className="mt-3">
          Get Started
        </Button>
      </Container>
    </section>
  );
};

export default HeroSection;