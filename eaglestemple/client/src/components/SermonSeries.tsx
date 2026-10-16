import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/SermonSeries.css"; // Clean file style layout import

// Import images safely from your assets structure
import bgImage2 from "./images/eaglestemple2.png";
import bgImage3 from "./images/eaglestemple3.png";
import bgImage4 from "./images/eaglestemple4.png";
import bgImage5 from "./images/eaglestemple5.png";
import bgImage6 from "./images/eaglestemple6.png";
import bgImageBernard from "./images/Bernard.png";

export default function SermonSeries() {
  const navigate = useNavigate();

  // Track state of active item hover sequences
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const structures = [
    {
      title: "SUNDAY SCHOOL",
      subtitle: "SEVEN SEALS MYSTERIES",
      desc: "Exploring the Seven Seals & Prophetic Revelations for all ages. Join us weekly for deep, insightful lessons that unlock original bible truths.",
      imgDefault: bgImage2,
      imgHover: bgImage5,      
      bgHover: bgImage3,
      bgColorHover: "rgba(10, 20, 40, 0.92)" 
    },
    {
      title: "BIBLE STUDY",
      subtitle: "THE SPOKEN WORD",
      desc: "Deep Dive into the Spoken Word. Weekly spiritual teachings focused meticulously on structural, localized growth and message foundation.",
      imgDefault: bgImage3,
      imgHover: bgImage6,      
      bgHover: bgImage4,
      bgColorHover: "rgba(5, 25, 20, 0.94)" 
    },
    {
      title: "OUR DOCTRINES",
      subtitle: "THE ORIGINAL FAITH",
      desc: "The Pillars of Our Faith. Learn about the perfect structural restoration of original scriptural truths brought to light in this generation.",
      imgDefault: bgImage4,
      imgHover: bgImageBernard,
      bgHover: bgImage2,
      bgColorHover: "rgba(25, 10, 25, 0.92)" 
    }
  ];

  return (
    <section className="sermon-series-section">
      <Container className="text-center">
        
        <span className="sermon-series-label">
          THE SPOKEN WORD FOR THIS HOUR
        </span>
        
        <h2 className="sermon-series-heading">
          Spiritual Pillars & Fellowship
        </h2>
        
        {/* Diamond Splitter Divider Line */}
        <div className="mx-auto mb-5 position-relative d-flex justify-content-center align-items-center sermon-series-divider">
          <div className="sermon-series-diamond" />
        </div>

        <Row className="g-4 justify-content-center">
          {structures.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <Col key={index} xs={12} md={4} className="d-flex">
                <div 
                  className="custom-premium-card"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    backgroundColor: isHovered ? "transparent" : "#03050c",
                    backgroundImage: isHovered 
                      ? `linear-gradient(${item.bgColorHover}, ${item.bgColorHover}), url('${item.bgHover}')` 
                      : "none"
                  }}
                >
                  {/* Card Content Organizer */}
                  <div className="card-content-wrapper">
                    
                    {/* Decorative Geometric Icon Block */}
                    <div className="card-icon-block">
                      <span>❖</span>
                    </div>
                    
                    <h4 className="card-main-title">
                      {item.title}
                    </h4>
                    
                    <span className="card-subtitle">
                      {item.subtitle}
                    </span>

                    {/* Centered Mask Image Frame */}
                    <div className="card-image-frame">
                      <img 
                        src={isHovered ? item.imgHover : item.imgDefault} 
                        alt={item.title} 
                      />
                    </div>

                    <p className="card-desc-text">
                      {item.desc}
                    </p>
                  </div>

                  {/* Action Link Footer Matrix */}
                  <button 
                    onClick={() => navigate('/water-baptism')} 
                    className="btn-card-learn-more"
                  >
                    LEAR MORE →
                  </button>

                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}