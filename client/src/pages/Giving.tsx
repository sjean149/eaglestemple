import { Container, Row, Col, Button, Card } from "react-bootstrap";
import EagleTemple4 from "../components/images/eaglestemple4.png";
import "./Giving.css";
import ZeffyEmbed from "../components/ZeffyGive";

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
            href="https://www.zeffy.com/en-US/donation-form/tithes-and-offering-62"
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
          <Row>
            <ZeffyEmbed  />
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
            "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver"
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
