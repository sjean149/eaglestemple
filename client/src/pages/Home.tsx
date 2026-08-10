import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Home() {
  const navigate = useNavigate();

  // --- AUTOMATIC BACKGROUND SLIDESHOW LOGIC ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=1920", // Congregation / Worship Focus
    "https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=1920", // Open Bible Sanctuary Focus
    "https://images.unsplash.com/photo-1445445290350-18a3b86e0b5b?q=80&w=1920", // Light Rays / Cross Atmosphere
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Crossfades every 6 seconds
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  // --- DATA FOR DYNAMIC CONTENT SECTIONS ---
  const heroSeries = [
    {
      title: "The Seven Seals",
      description:
        "A deep structural exposition of the mysteries hidden from the foundation of the world.",
      path: "/original-sin",
    },
    {
      title: "The Revelation Rest",
      description:
        "Unveiling the dispensational shift from law rituals to spiritual grace.",
      path: "/sabbath-truth",
    },
  ];

  const sermons = [
    {
      title: "The Token of the Covenant",
      date: "July 5, 2026",
      speaker: "Pastor",
    },
    { title: "Buried in the Name", date: "June 28, 2026", speaker: "Pastor" },
    {
      title: "The Falling of the Lateral Rain",
      date: "June 21, 2026",
      speaker: "Pastor",
    },
  ];

  return (
    <div className="homepage-wrapper bg-black text-light w-100 min-vh-100">
      {/* ================= HERO SECTION W/ SLIDESHOW ================= */}
      <section className="position-relative w-100 min-vh-100 d-flex flex-column align-items-center justify-content-center text-center overflow-hidden">
        {slides.map((imgUrl, index) => (
          <div
            key={index}
            className="position-absolute top-0 start-0 w-100 h-100 slideshow-image"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.85)), url('${imgUrl}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: currentSlide === index ? 1 : 0,
              transition: "opacity 1.5s ease-in-out",
              zIndex: 1,
            }}
          />
        ))}

        <div
          className="position-relative container px-4 d-flex flex-column align-items-center justify-content-center"
          style={{ maxWidth: "850px", zIndex: 2 }}
        >
          <span
            className="text-warning text-uppercase tracking-widest fw-bold mb-3 d-block small"
            style={{ letterSpacing: "0.25em" }}
          >
            WELCOME TO EAGLES TEMPLE
          </span>
          <h1
            className="display-2 fw-bold text-white mb-4 hero-title-serif"
            style={{ lineHeight: "1.15" }}
          >
            The Original Spoken Word
          </h1>
          <p
            className="lead text-white-50 mb-5 max-w-xl mx-auto"
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.6",
              fontWeight: "300",
            }}
          >
            Experience true spiritual awakening, deep foundations of faith, and
            an uncompromised commitment to divine truth. Join our community as
            we rise higher together.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center w-100">
            <button
              onClick={() => navigate("/water-baptism")}
              className="btn btn-warning text-dark fw-bold text-uppercase tracking-wider px-5 py-3 rounded-1 hero-btn-primary"
            >
              WATCH LIVE
            </button>
            <button
              onClick={() => navigate("/original-sin")}
              className="btn btn-outline-light text-white fw-bold text-uppercase tracking-wider px-5 py-3 rounded-1 hero-btn-secondary"
            >
              OUR BELIEFS
            </button>
          </div>
        </div>
      </section>

      {/* ================= HERO SERIES SECTION ================= */}
      <section className="py-5 bg-neutral-950 border-top border-secondary border-opacity-10">
        <Container className="py-4">
          <div className="mb-4">
            <span className="text-warning text-uppercase tracking-wider small fw-bold">
              FEATURED STUDIES
            </span>
            <h2 className="text-white fw-bold mt-1">Hero Message Series</h2>
          </div>
          <Row className="g-4">
            {heroSeries.map((series, idx) => (
              <Col key={idx} xs={12} md={6}>
                <Card
                  onClick={() => navigate(series.path)}
                  className="bg-dark border-secondary border-opacity-25 p-4 h-100 text-decoration-none custom-home-card"
                  style={{ cursor: "pointer" }}
                >
                  <Card.Body className="p-0">
                    <h4 className="text-white fw-semibold mb-2">
                      {series.title}
                    </h4>
                    <p className="text-white-50 m-0 small combo-line-height">
                      {series.description}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= SERMON SERIES SECTION ================= */}
      <section className="py-5 bg-black">
        <Container className="py-4">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <span className="text-warning text-uppercase tracking-wider small fw-bold">
                ARCHIVE RELEASES
              </span>
              <h2 className="text-white fw-bold mt-1">Sermon Transcripts</h2>
            </div>
            <button
              onClick={() => navigate("/water-baptism")}
              className="btn btn-link text-warning text-decoration-none p-0 small tracking-wide"
            >
              View All Sermons →
            </button>
          </div>
          <Row className="g-4">
            {sermons.map((sermon, idx) => (
              <Col key={idx} xs={12} md={4}>
                <Card className="bg-dark bg-opacity-50 border-secondary border-opacity-10 p-3 h-100">
                  <Card.Body className="p-2 d-flex flex-column justify-content-between">
                    <div>
                      <span
                        className="text-secondary d-block mb-1 font-monospace"
                        style={{ fontSize: "0.75rem" }}
                      >
                        {sermon.date}
                      </span>
                      <h5
                        className="text-white-50 fw-medium mb-3"
                        style={{ fontSize: "1.05rem" }}
                      >
                        {sermon.title}
                      </h5>
                    </div>
                    <span className="text-muted small">
                      Speaker: {sermon.speaker}
                    </span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Duplicate footer section completely stripped from here */}
    </div>
  );
}
