import { Container, Row, Col, Button } from "react-bootstrap";
import NavBar from "../components/NavBar";
import SermonCardList from "./SermonCardsList";
import "./WatchSermon.css";

export default function WatchSermons() {
  return (
    <div className="sermons-page">
      {/* Hero Section */}
      <section className="sermons-hero">
        <Container>
          <div className="text-center sermons-heading">
            <span className="eyebrow">SERMONS</span>

            <h1>The Word That Transforms</h1>
          </div>

          {/* Featured Sermon */}
          <Row className="align-items-center featured-sermon">
            <Col lg={8}>
              <div className="sermon-video">
                {/* Replace this iframe with your featured YouTube video */}
                <iframe
                  src="https://www.youtube.com/watch?v=nFOFGBx5pGY"
                  title="Featured Sermon"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Col>

            <Col lg={4}>
              <div className="featured-info">
                <span className="now-playing">NOW PLAYING</span>

                <h2>Respect</h2>

                <h4>Brother Josue Bince</h4>

                <p className="sermon-date">August 9, 2026</p>

                <p>
                  Watch this message and discover biblical teaching designed to
                  strengthen your faith and deepen your walk with Christ.
                </p>

                <Button className="watch-button">▶ Watch Full Sermon</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sermon Library */}
      <section className="sermon-library">
        <Container>
          <div className="library-header">
            <div>
              <span className="eyebrow">MESSAGES</span>
              <h2>All Sermons</h2>
            </div>

            <input
              type="text"
              className="sermon-search"
              placeholder="Search sermons..."
            />
          </div>

          {/* Leave room for SermonCardList.tsx */}
          <Col lg={12}>
            <div className="sermon-card-list">
              <SermonCardList />
              
            </div>
          </Col>
        </Container>
      </section>
    </div>
  );
}


