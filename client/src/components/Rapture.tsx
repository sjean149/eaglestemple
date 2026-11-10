import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/SermonSeries.css";

// Image imports
import raptureBg from "./images/rapture.jpg";

interface QAItem {
  id: number;
  qEn: string;
  aEn: string;
  qFr: string;
  aFr: string;
}

export default function Rapture() {
  const [activeHoverId, setActiveHoverId] = useState<number | null>(null);

  const rapturePairs: QAItem[] = [
    {
      id: 1,
      qEn: "1. What is the biblical definition of the Rapture?",
      aEn: "The Rapture is the sudden catching away of the Living Bride of Jesus Christ, along with the resurrected saints, transformed into immortal bodies to meet the Lord in the air before the Great Tribulation.",
      qFr: "1. Quelle est la définition biblique de l'Enlèvement?",
      aFr: "L'Enlèvement est le départ soudain de l'Épouse vivante de Jésus-Christ, ainsi que des saints ressuscités, transformés en corps immortels pour rencontrer le Seigneur dans les airs avant la Grande Tribulation."
    },
    {
      id: 2,
      qEn: "2. What three things must take place according to 1 Thessalonians 4:16?",
      aEn: "According to 1 Thessalonians 4:16, the Lord descends with three distinct events: a Shout (the Message to gather the Bride), the Voice of the Archangel (to resurrect the dead), and the Trumpet of God (calling us to the Wedding Supper).",
      qFr: "2. Quelles sont les trois choses qui doivent se produire selon 1 Thessaloniciens 4:16?",
      aFr: "Selon 1 Thessaloniciens 4:16, le Seigneur descend avec trois événements distincts : un Cri (le Message pour rassembler l'Épouse), la Voix de l'Archange (pour ressusciter les morts), et la Trompette de Dieu (nous appelant au Festin des Noces)."
    },
    {
      id: 3,
      qEn: "3. What is the mystery of the 'Shout' in this end time?",
      aEn: "The Shout is the restored Word message delivered by the prophet of Malachi 4. It awakens the Bride, reveals the mystery of the Seven Seals, and gathers the Bride out of denominational confusion.",
      qFr: "3. Quel est le mystère du 'Cri' en ce temps de la fin?",
      aFr: "Le Cri est le message de la Parole restaurée apporté par le prophète de Malachie 4. Il réveille l'Épouse, révèle le mystère des Sept Sceaux et rassemble l'Épouse hors de la confusion dénominationnelle."
    },
    {
      id: 4,
      qEn: "4. How will the bodies of the believers be changed?",
      aEn: "In a moment, in the twinkling of an eye, these mortal bodies will put on immortality (1 Corinthians 15:52). We will bypass death and receive a glorified, eternal body like unto His glorious body.",
      qFr: "4. Comment les corps des croyants seront-ils changés?",
      aFr: "En un instant, en un clin d'œil, ces corps mortels revêtiront l'immortalité (1 Corinthiens 15:52). Nous contournerons la mort et recevrons un corps glorifié et éternel semblable à Son corps glorieux."
    },
    {
      id: 5,
      qEn: "5. Why is Raptor Faith necessary for the Bride?",
      aEn: "Rapturing Faith is the revelation of the Seven Thunders. It gives the Bride the spiritual grace, perfection, and faith required to step out of gravity and be translated into the presence of God.",
      qFr: "5. Pourquoi la Foi de l'Enlèvement est-elle nécessaire pour l'Épouse?",
      aFr: "La Foi de l'Enlèvement est la révélation des Sept Tonnerres. Elle donne à l'Épouse la grâce spirituelle, la perfection et la foi nécessaires pour sortir de la gravité et être translatée dans la présence de Dieu."
    },
    {
      id: 6,
      qEn: "6. Who will participate in the Marriage Supper of the Lamb?",
      aEn: "Only the Predestinated Bride who has made herself ready (Revelation 19:7) by putting on the immaculate garment of the Word will partake in the 3.5-year Marriage Supper while judgment falls on earth.",
      qFr: "6. Qui participera au Festin des Noces de l'Agneau?",
      aFr: "Seule l'Épouse Prédestinée qui s'est préparée (Apocalypse 19:7) en revêtant le vêtement immaculé de la Parole participera au Festin des Noces de 3 ans et demi pendant que le jugement tombe sur la terre."
    }
  ];

  return (
    <section 
      className="sermon-series-section position-relative"
      style={{
        backgroundImage: `url(${raptureBg})`,
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
          <h2 className="sermon-series-heading">The Revelation of the Rapture</h2>
          
          <div className="mx-auto mb-4 position-relative d-flex justify-content-center align-items-center sermon-series-divider">
            <div className="sermon-series-diamond" />
          </div>
          <p className="text-light fs-5 mx-auto" style={{ maxWidth: "800px" }}>
            Exploring the mystery of the translation of the Bride, the Shout, the Voice, and the Trumpet according to the Scriptures.
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
          {rapturePairs.map((pair) => {
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