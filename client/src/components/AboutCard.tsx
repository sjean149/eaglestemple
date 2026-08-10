import { Container, Row, Col, Button } from "react-bootstrap";
import AboutDoctrine from "./AboutHistory";

import Leaders from "../assets/partnersincrime.jpg";

export default function AboutHero() {
  return (
    <>
      <section
        style={{
          background: "#030712",
          color: "#fff",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          padding: "100px 0",
        }}
      >
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <span
                style={{
                  color: "#fbbf24",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Welcome to Eagles Temple
              </span>

              <h1
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "4rem",
                  margin: "25px 0",
                  lineHeight: "1.2",
                }}
              >
                Rooted in Truth.
                <br />
                Growing in Faith.
              </h1>

              <p
                style={{
                  color: "#d1d5db",
                  fontSize: "1.15rem",
                  lineHeight: "2",
                }}
              >
                Eagles Temple exists to proclaim the Gospel of Jesus Christ,
                strengthen believers through the revealed Word of God, and
                prepare hearts for His soon coming.
              </p>

              <p
                style={{
                  color: "#9ca3af",
                  lineHeight: "1.9",
                  marginTop: "20px",
                }}
              >
                Whether you're visiting for the first time or looking for a
                church family, we invite you to worship, grow, and experience
                God's presence with us.
              </p>

              <div className="mt-5 d-flex gap-3">
                <Button
                  style={{
                    background: "#fbbf24",
                    border: "none",
                    color: "#000",
                    padding: "14px 35px",
                  }}
                >
                  Plan Your Visit
                </Button>

                <Button
                  variant="outline-light"
                  href="#doctrine"
                  style={{
                    padding: "14px 35px",
                  }}
                >
                  Our Doctrine
                </Button>
              </div>
            </Col>

            <Col lg={6}>
              <div
                style={{
                  overflow: "hidden",
                  borderRadius: "20px",
                  boxShadow: "0 25px 60px rgba(0,0,0,.45)",
                }}
              >
                <img
                  src={Leaders}
                  alt="Eagles Temple"
                  style={{
                    width: "100%",
                    height: "700px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <AboutDoctrine />
    </>
  );
}
