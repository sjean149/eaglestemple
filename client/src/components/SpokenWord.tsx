import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/SermonSeries.css";

// Image imports
import spokenWordImg1 from "./images/eaglestemple2.png";
import spokenWordImg2 from "./images/eaglestemple3.png";
import spokenWordBg from "./images/spoken-word.jpg";

interface QAItem {
  id: number;
  qEn: string;
  aEn: string;
  qFr: string;
  aFr: string;
}

export default function SpokenWord() {
  const navigate = useNavigate();
  const [activeHoverId, setActiveHoverId] = useState<number | null>(null);

  const spokenWordPairs: QAItem[] = [
    {
      id: 1,
      qEn: "1. What is the power of the Spoken Word?",
      aEn: "The Spoken Word is the original seed of God. When spoken under the inspiration and perfect authority of the Holy Spirit, it carries creative power to bring into existence whatever God has ordained.",
      qFr: "1. Quelle est la puissance de la Parole Parlée?",
      aFr: "La Parole Parlée est la semence originale de Dieu. Lorsqu'elle est prononcée sous l'inspiration et l'autorité parfaite du Saint-Esprit, elle transporte la puissance créatrice pour amener à l'existence ce que Dieu a ordonné."
    },
    {
      id: 2,
      qEn: "2. Why is the Spoken Word called the Original Seed?",
      aEn: "Every seed produces after its own kind (Genesis 1:11). The Spoken Word of God is unadulterated truth. Denominational creeds alter the seed, but the Spoken Word produces genuine, born-again sons and daughters of God.",
      qFr: "2. Pourquoi la Parole Parlée est-elle appelée la Semence Originale?",
      aFr: "Chaque semence produit selon son espèce (Genèse 1:11). La Parole Parlée de Dieu est une vérité pure. Les credos dénominationnels altèrent la semence, mais la Parole Parlée produit de véritables fils et filles de Dieu nés de nouveau."
    },
    {
      id: 3,
      qEn: "3. How does Faith connect to the Spoken Word?",
      aEn: "Faith comes by hearing, and hearing by the Word of God (Romans 10:17). True faith is not mental assent; it is a divine revelation that gives the believer the confidence to speak the Word and see it manifested.",
      qFr: "3. Comment la Foi se rattache-t-elle à la Parole Parlée?",
      aFr: "La foi vient de ce qu'on entend, et ce qu'on entend vient de la Parole de Dieu (Romains 10:17). La vraie foi n'est pas un assentiment mental; c'est une révélation divine qui donne au croyant la confiance de prononcer la Parole et de la voir se manifester."
    },
    {
      id: 4,
      qEn: "4. What role did the Spoken Word play in Brother Branham's ministry?",
      aEn: "God demonstrated the creative power of the Spoken Word through His prophet—creating squirrels, calming storms, and speaking healing—proving that Jesus Christ is the same yesterday, today, and forever.",
      qFr: "4. Quel rôle la Parole Parlée a-t-elle joué dans le ministère de Frère Branham?",
      aFr: "Dieu a démontré la puissance créatrice de la Parole Parlée à travers Son prophète — en créant des écureuils, en calmant les tempêtes et en prononçant la guérison — prouvant que Jésus-Christ est le même hier, aujourd'hui et éternellement."
    },
    {
      id: 5,
      qEn: "5. How does the Third Pull relate to the Spoken Word?",
      aEn: "The Third Pull represents the total opening of the Word and the ministry of the Spoken Word. It operates not by emotion, but by the sovereign decree of the Holy Ghost working through pure faith.",
      qFr: "5. Quel est le rapport entre le Troisième Signal et la Parole Parlée?",
      aFr: "Le Troisième Signal représente l'ouverture totale de la Parole et le ministère de la Parole Parlée. Il n'agit pas par l'émotion, mais par le décret souverain du Saint-Esprit opérant à travers une foi pure."
    },
    {
      id: 6,
      qEn: "6. What is the final manifestation of the Spoken Word in the Bride?",
      aEn: "In the final hour, the Bride will be so fully unified with the Word that she will speak the Word, and God will honor it. This creative Word faith prepares her for the Rapture.",
      qFr: "6. Quelle est la manifestation finale de la Parole Parlée dans l'Épouse?",
      aFr: "Dans l'heure finale, l'Épouse sera tellement unie à la Parole qu'elle prononcera la Parole et Dieu l'honorera. Cette foi de la Parole créatrice la prépare pour l'Enlèvement."
    }
  ];

  return (
    <section 
      className="sermon-series-section position-relative"
      style={{
        backgroundImage: `url(${spokenWordBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center 25%",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Dark overlay layer for dimming */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(2, 6, 18, 0.75)",
          zIndex: 1
        }}
      />

      <Container className="position-relative" style={{ zIndex: 2 }}>
        {/* Header Section */}
        <div className="text-center mb-5">
          <span className="sermon-series-label">OUR FAITH & DOCTRINE</span>
          <h2 className="sermon-series-heading">The Power of the Spoken Word</h2>
          
          <div className="mx-auto mb-4 position-relative d-flex justify-content-center align-items-center sermon-series-divider">
            <div className="sermon-series-diamond" />
          </div>
          <p className="text-light fs-5 mx-auto" style={{ maxWidth: "800px" }}>
            Unveiling the mystery of the Original Seed, creative faith, and the authority of God's Word in the end-time Bride.
          </p>
        </div>

        {/* Column Titles */}
        <Row className="mb-3 text-center">
          <Col lg={6}>
            <h3 className="text-warning border-bottom pb-2 font-serif">
              🇬🇧 English Teaching
            </h3>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            <h3 className="text-warning border-bottom pb-2 font-serif">
              🇫🇷 Enseignement en Français
            </h3>
          </Col>
        </Row>

        {/* Synchronized Row-by-Row Q&A Layout */}
        <div className="mb-5">
          {spokenWordPairs.map((pair) => {
            const isHighlighted = activeHoverId === pair.id;

            const cardStyle = {
              borderLeft: isHighlighted ? "6px solid #15803d" : "4px solid rgba(255, 193, 7, 0.4)",
              borderTop: isHighlighted ? "1px solid #166534" : "1px solid rgba(255, 255, 255, 0.05)",
              borderRight: isHighlighted ? "1px solid #166534" : "1px solid rgba(255, 255, 255, 0.05)",
              borderBottom: isHighlighted ? "1px solid #166534" : "1px solid rgba(255, 255, 255, 0.05)",
              backgroundColor: isHighlighted ? "rgba(6, 44, 23, 0.92)" : "rgba(10, 15, 30, 0.82)",
              boxShadow: isHighlighted 
                ? "0 0 25px rgba(22, 101, 52, 0.8), inset 0 0 15px rgba(34, 197, 94, 0.3)" 
                : "none",
              transform: isHighlighted ? "scale(1.015)" : "scale(1)",
              transition: "all 0.25s cubic-bezier(0.25, 1, 0.5, 1)",
              cursor: "pointer"
            };

            return (
              <Row 
                key={pair.id} 
                className="g-3 mb-3 align-items-stretch"
                onMouseEnter={() => setActiveHoverId(pair.id)}
                onMouseLeave={() => setActiveHoverId(null)}
              >
                {/* English Card */}
                <Col lg={6}>
                  <div className="p-3 rounded h-100" style={cardStyle}>
                    <h5 className="fw-bold mb-2" style={{ color: isHighlighted ? "#86efac" : "#ffc107" }}>
                      {pair.qEn}
                    </h5>
                    <p className="mb-0 text-light" style={{ lineHeight: "1.7", fontSize: "0.95rem" }}>
                      {pair.aEn}
                    </p>
                  </div>
                </Col>

                {/* French Mobile Title Header */}
                <Col xs={12} className="d-lg-none text-center mt-2">
                  <h4 className="text-warning font-serif">🇫🇷 Enseignement en Français</h4>
                </Col>

                {/* French Card */}
                <Col lg={6}>
                  <div className="p-3 rounded h-100" style={cardStyle}>
                    <h5 className="fw-bold mb-2" style={{ color: isHighlighted ? "#86efac" : "#ffc107" }}>
                      {pair.qFr}
                    </h5>
                    <p className="mb-0 text-light" style={{ lineHeight: "1.7", fontSize: "0.95rem" }}>
                      {pair.aFr}
                    </p>
                  </div>
                </Col>
              </Row>
            );
          })}
        </div>

    

      </Container>
    </section>
  );
}