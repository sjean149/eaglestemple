import React, { useState } from "react";
import { Container, Row, Col, Card, Button, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LocationMap() {
  // Map parameters:
  // 'h' = Hybrid (Satellite + Streets & Road Labels)
  // 'm' = Standard Roadmap View
  const [mapType, setMapType] = useState<"h" | "m">("h");
  const [zoomLevel, setZoomLevel] = useState<number>(18);

  const churchAddress = "13525 NE 2nd CT, Miami, FL 33161";
  const encodedAddress = encodeURIComponent(churchAddress);

  // Google Maps Embed URL with Streets + Satellite combined (No API key required)
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=${mapType}&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`;

  return (
    <section
      id="location"
      className="w-100 py-5"
      style={{
        backgroundColor: "#050a19",
        color: "#ffffff",
      }}
    >
      <Container>
        {/* Section Header */}
        <div className="text-center mb-4">
          <span
            className="d-inline-block text-uppercase fw-bold mb-2 px-3 py-1 rounded-pill"
            style={{
              color: "#ffc107",
              backgroundColor: "rgba(255, 193, 7, 0.12)",
              letterSpacing: "2px",
              fontSize: "0.85rem",
            }}
          >
            Visit Us
          </span>
          <h2 className="fw-bold display-5 mb-2" style={{ fontFamily: "Georgia, serif" }}>
            Find Our Location
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.7)", maxWidth: "600px", margin: "0 auto" }}>
            Explore our sanctuary location with interactive street navigation and building details.
          </p>
        </div>

        {/* Layer & Zoom Controls */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
          <ButtonGroup className="bg-dark p-1 rounded-pill border border-secondary">
            <Button
              variant={mapType === "h" ? "warning" : "dark"}
              className="rounded-pill px-3 fw-bold text-uppercase small"
              onClick={() => setMapType("h")}
            >
              🛰️ Satellite + Streets
            </Button>
            <Button
              variant={mapType === "m" ? "warning" : "dark"}
              className="rounded-pill px-3 fw-bold text-uppercase small"
              onClick={() => setMapType("m")}
            >
              🗺️ Standard Roadmap
            </Button>
          </ButtonGroup>

          <ButtonGroup className="bg-dark p-1 rounded-pill border border-secondary">
            <Button
              variant={zoomLevel === 19 ? "info" : "outline-light"}
              className="rounded-pill px-3 fw-bold small"
              onClick={() => setZoomLevel(19)}
            >
              🔍 Close Zoom (Church)
            </Button>
            <Button
              variant={zoomLevel === 16 ? "info" : "outline-light"}
              className="rounded-pill px-3 fw-bold small"
              onClick={() => setZoomLevel(16)}
            >
              🌐 Area View
            </Button>
          </ButtonGroup>
        </div>

        <Row className="g-4 align-items-stretch">
          {/* Left Side: Embedded Map Canvas */}
          <Col lg={7}>
            <div
              className="h-100 rounded-4 overflow-hidden shadow-lg position-relative"
              style={{
                border: "2px solid rgba(255, 193, 7, 0.35)",
                minHeight: "500px",
              }}
            >
              <iframe
                title="Eagles Temple Church Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Col>

          {/* Right Side: Address & Schedule Info Card */}
          <Col lg={5}>
            <Card
              className="h-100 p-4 shadow-lg text-white d-flex flex-column justify-content-between"
              style={{
                backgroundColor: "rgba(13, 27, 62, 0.85)",
                borderRadius: "18px",
                border: "2px solid rgba(255, 193, 7, 0.35)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div>
                <h3 className="fw-bold mb-4" style={{ color: "#ffc107", fontFamily: "Georgia, serif" }}>
                  Worship With Us
                </h3>

                {/* Location Details */}
                <div className="mb-4">
                  <h6 className="text-uppercase fw-bold text-muted small mb-1">Address</h6>
                  <p className="fs-6 mb-2" style={{ lineHeight: "1.4" }}>
                    Eagles Temple Church<br />
                    13525 NE 2nd CT<br />
                    Miami, FL 33161
                  </p>
                  <p className="small mb-0" style={{ color: "#38bdf8" }}>
                    ✉️ eaglestemple2220@yahoo.com
                  </p>
                </div>

                {/* Service Hours */}
                <div className="mb-4">
                  <h6 className="text-uppercase fw-bold text-muted small mb-2">Service Times</h6>

                  <div className="d-flex justify-content-between border-bottom border-secondary border-opacity-25 py-1.5">
                    <span>Sunday Morning</span>
                    <span className="fw-bold" style={{ color: "#38bdf8" }}>9:00 AM</span>
                  </div>

                  <div className="d-flex justify-content-between border-bottom border-secondary border-opacity-25 py-1.5">
                    <div>
                      <span>Sunday Evening</span>
                      <div className="small text-muted">Family Meetings (Q&A)</div>
                    </div>
                    <span className="fw-bold" style={{ color: "#38bdf8" }}>7:30 PM</span>
                  </div>

                  <div className="d-flex justify-content-between border-bottom border-secondary border-opacity-25 py-1.5">
                    <span>Wednesday Service</span>
                    <span className="fw-bold" style={{ color: "#38bdf8" }}>7:30 PM</span>
                  </div>

                  <div className="d-flex justify-content-between border-bottom border-secondary border-opacity-25 py-1.5">
                    <span>Friday Service</span>
                    <span className="fw-bold" style={{ color: "#38bdf8" }}>7:30 PM</span>
                  </div>
                </div>
              </div>

              {/* Direct Directions Button */}
              <div className="mt-3">
                <Button
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-100 fw-bold border-0 py-2.5 rounded-pill shadow d-flex align-items-center justify-content-center gap-2"
                  style={{
                    backgroundColor: "#38bdf8",
                    color: "#050a19",
                    fontSize: "0.95rem",
                    letterSpacing: "0.5px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  Get Directions in Google Maps
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}