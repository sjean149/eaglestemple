import { Container } from "react-bootstrap";
import pic1 from "./images/Bernard.png"
import "./AboutHistory.css";

export default function AboutDoctrine() {
  return (
    <section
      className="doctrine-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url(${pic1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(3,7,18,.90) 0%, rgba(3,7,18,.75) 45%, rgba(3,7,18,.95) 100%)",
        }}
      />

      <Container
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div className="text-center mb-5">
          <span
            style={{
              color: "#fbbf24",
              textTransform: "uppercase",
              letterSpacing: "4px",
              fontWeight: 600,
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Our History
          </span>

          <h1
            style={{
              color: "#fff",
              fontSize: "3.5rem",
              fontFamily: "'Cinzel', serif",
              marginTop: "15px",
              marginBottom: "20px",
            }}
          >
            About Eagles Temple
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "1.2rem",
              maxWidth: "700px",
              margin: "auto",
              lineHeight: "1.8",
            }}
          >
            Discover the history, mission, and spiritual foundation of Eagles
            Temple of Miami.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="timeline-wrapper">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot">1</div>

              <div className="timeline-card">
                <span className="timeline-label">The Beginning</span>

                <h3>Our Beginning</h3>

                <p>
                  Eagles Temple of Miami traces its origins to a small,
                  devoted group of believers seeking a deep, unadulterated
                  connection with the Creator through the end-time teachings
                  of William Branham.
                </p>

                <p>
                  Bound by a desire to study his prophetic revelations and
                  remain faithful to biblical teachings, they first gathered
                  in a home before eventually relocating as the congregation
                  continued to grow.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">2</div>

              <div className="timeline-card">
                <span className="timeline-label">Early Years</span>

                <h3>Early Fellowship</h3>

                <p>
                  During its earliest years, the congregation met in homes
                  where believers focused on prayer, Bible study, and the
                  revealed Word.
                </p>

                <p>
                  These intimate gatherings emphasized spiritual growth,
                  careful leadership, and a return to what they believed was
                  the original Apostolic faith.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">3</div>

              <div className="timeline-card">
                <span className="timeline-label">1989</span>

                <h3>Growth & Incorporation</h3>

                <p>
                  As attendance increased, the fellowship moved into larger
                  buildings and officially incorporated as a church in 1989.
                </p>

                <p>
                  Their outreach expanded through Bible studies, prayer
                  meetings, worship services, fasting, and the weekly radio
                  broadcast, "Questions and Answers on the Bible."
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">4</div>

              <div className="timeline-card">
                <span className="timeline-label">Present Day</span>

                <h3>Today</h3>

                <p>
                  Today, Eagles Temple continues to uphold the teachings that
                  shaped its foundation while welcoming all who desire to grow
                  spiritually.
                </p>

                <p>
                  The church emphasizes agape love, divine healing,
                  deliverance, rapturing faith, and a deeper walk with Jesus
                  Christ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

    </section>
  );
}
