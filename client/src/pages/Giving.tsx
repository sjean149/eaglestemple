import { Container, Row, Col, Button, Card } from "react-bootstrap";
import EagleTemple4 from "../components/images/eaglestemple4.png";
import "./Giving.css";

export default function Giving() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={EagleTemple4}
          alt="Church Worship"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(3,7,18,.75) 0%, rgba(3,7,18,.55) 45%, rgba(3,7,18,.92) 100%)",
          }}
        />

        <Container
          className="text-center"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "850px",
          }}
        >
          <span
            style={{
              color: "#fbbf24",
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Worship Through Giving
          </span>

          <h1
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "4rem",
              color: "#fff",
              margin: "25px 0",
            }}
          >
            Thank You for Your Generosity
          </h1>

          <p
            style={{
              color: "#e5e7eb",
              fontSize: "1.2rem",
              lineHeight: "1.9",
              maxWidth: "700px",
              margin: "auto",
            }}
          >
            Every gift helps Eagles Temple continue preaching the Gospel,
            supporting missions, serving our community, and investing in future
            generations.
          </p>

          <Button
            href="https://pushpay.com/g/trinitymiami"
            target="_blank"
            className="mt-5 px-5 py-3"
            style={{
              background: "#fbbf24",
              color: "#000",
              border: "none",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            Give Online
          </Button>
        </Container>
      </section>

      {/* WHY WE GIVE */}
      <section
        style={{
          background: "#030712",
          color: "#fff",
          padding: "100px 0",
        }}
      >
        <Container>
          <div className="text-center mb-5">
            <span
              style={{
                color: "#fbbf24",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Why We Give
            </span>

            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Giving Changes Lives
            </h2>
          </div>

          <Row className="g-4">
            <Col lg={4}>
              <Card
                className="h-100 text-center"
                style={{
                  background: "#111827",
                  color: "#fff",
                  border: "1px solid rgba(251,191,36,.2)",
                  padding: "40px 30px",
                }}
              >
                <h3 style={{ color: "#fbbf24" }}>Serve</h3>

                <p>
                  Your generosity allows us to serve families, reach our
                  community, and meet practical needs with the love of Christ.
                </p>
              </Card>
            </Col>

            <Col lg={4}>
              <Card
                className="h-100 text-center"
                style={{
                  background: "#111827",
                  color: "#fff",
                  border: "1px solid rgba(251,191,36,.2)",
                  padding: "40px 30px",
                }}
              >
                <h3 style={{ color: "#fbbf24" }}>Support Ministry</h3>

                <p>
                  Every offering strengthens worship services, Bible studies,
                  discipleship, and outreach ministries.
                </p>
              </Card>
            </Col>

            <Col lg={4}>
              <Card
                className="h-100 text-center"
                style={{
                  background: "#111827",
                  color: "#fff",
                  border: "1px solid rgba(251,191,36,.2)",
                  padding: "40px 30px",
                }}
              >
                <h3 style={{ color: "#fbbf24" }}>Build the Future</h3>

                <p>
                  Your faithfulness helps invest in children, youth, missions,
                  and the next generation of believers.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SCRIPTURE */}
      <section
        style={{
          background: "#111827",
          color: "#fff",
          padding: "100px 0",
        }}
      >
        <Container className="text-center">
          <blockquote
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "2rem",
              fontStyle: "italic",
              maxWidth: "850px",
              margin: "auto",
              lineHeight: "1.8",
            }}
          >
            "Each one must give as he has decided in his heart, not reluctantly
            or under compulsion, for God loves a cheerful giver."
          </blockquote>

          <p
            style={{
              marginTop: "30px",
              color: "#fbbf24",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            2 Corinthians 9:7
          </p>
        </Container>
      </section>
    </>
  );
}
