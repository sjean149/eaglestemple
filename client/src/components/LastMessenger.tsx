import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import branhamImg from "./images/branham.png";

export default function LastMessenger() {
  return (
    <section
      className="w-100 p-0 overflow-hidden d-flex align-items-center"
      style={{
        backgroundColor: "#050a19",
        minHeight: "85vh",
        background: "radial-gradient(circle at center, #0a1532 0%, #050a19 100%)",
      }}
    >
      {/* Full-width container with zero side padding */}
      <Container fluid className="p-0">
        <div
          className="w-100 overflow-hidden shadow-lg"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(255, 193, 7, 0.15) 0%, transparent 60%), linear-gradient(135deg, rgba(13, 27, 62, 0.95) 0%, rgba(5, 10, 25, 0.95) 100%)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7)",
          }}
        >
          <Row className="g-0 align-items-stretch">
            {/* Left Side: Image (Col 5 - Reduced Width) */}
            <Col lg={5} className="d-flex position-relative overflow-hidden">
              <div
                className="w-100"
                style={{
                  height: "650px",
                  backgroundColor: "#050a19",
                }}
              >
                <img
                  src={branhamImg}
                  alt="William Branham - Revelation 10:7"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    display: "block",
                    filter: "contrast(1.08) brightness(0.98)",
                  }}
                />
              </div>
            </Col>

            {/* Right Side: Scripture Text (Col 7 - Increased Width) */}
            <Col lg={7} className="d-flex">
              <div
                className="position-relative p-4 p-md-5 text-white w-100 d-flex flex-column justify-content-center overflow-hidden"
                style={{ height: "650px" }}
              >
                {/* Static Background Glow */}
                <div
                  className="position-absolute rounded-circle"
                  style={{
                    top: "-10%",
                    right: "-10%",
                    width: "350px",
                    height: "350px",
                    background: "rgba(255, 193, 7, 0.12)",
                    filter: "blur(70px)",
                    pointerEvents: "none",
                  }}
                />

                <div className="position-relative px-lg-4" style={{ zIndex: 2 }}>
                  {/* Category Badge */}
                  <div>
                    <span
                      className="d-inline-block text-uppercase fw-bold mb-3 px-3 py-2 rounded-pill"
                      style={{
                        color: "#ffc107",
                        backgroundColor: "rgba(255, 193, 7, 0.12)",
                        letterSpacing: "2.5px",
                        fontSize: "0.95rem",
                      }}
                    >
                      The Voice of the Seventh Angel
                    </span>
                  </div>

                  {/* Scripture Quote */}
                  <blockquote
                    className="blockquote fw-light my-4"
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "clamp(1.5rem, 2.2vw, 2.25rem)",
                      lineHeight: "1.6",
                      color: "#ffffff",
                      textShadow: "0px 2px 10px rgba(0, 0, 0, 0.9)",
                    }}
                  >
                    “But in the days of the voice of the seventh angel, when he shall
                    begin to sound, the mystery of God should be finished, as he hath
                    declared to his servants the prophets.”
                  </blockquote>

                  {/* Citation Badge */}
                  <div className="d-flex align-items-center gap-3 mt-4">
                    <span
                      className="px-4 py-2.5 rounded-pill fw-bold shadow"
                      style={{
                        background: "linear-gradient(135deg, #ffc107 0%, #e0a800 100%)",
                        color: "#050a19",
                        fontSize: "1.1rem",
                        letterSpacing: "1px",
                        boxShadow: "0 4px 15px rgba(255, 193, 7, 0.3)",
                        display: "inline-block",
                      }}
                    >
                      Revelation 10:7
                    </span>
                    <span
                      className="fw-semibold"
                      style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "0.95rem" }}
                    >
                      King James Version
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}