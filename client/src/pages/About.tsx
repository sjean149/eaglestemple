import {Container, Row, Col} from "react-bootstrap";
import NavBar from "../components/NavBar";
import AboutDoctrine from "../components/AboutDoctrine";

import Leaders from "../assets/partnersincrime.jpg";
import Hands from "../assets/hands.jpg";
import "./About.css"

export default function AboutHero() {
  return (
    <>
      <NavBar />
      <section className="about-hero py-5">
        <Container fluid>
          <Row className="g-3">
            {/* TOP LEFT */}
            <Col md={9}>
              <div className="hero-box text-box">
                <small className="text-uppercase text-warning fw-bold">
                  About Us
                </small>

                <h1 className="display-4 fw-bold mt-3">
                  There’s a Place for You Here
                </h1>

                <p className="lead mt-4">
                  <i><b>
                    Welcome to Eagles Temple. We are committed to helping people
                    grow in faith, build meaningful relationships, and discover
                    God’s purpose for their lives.
                  </b></i>
                </p>

                <p>
                  Whether you’re exploring faith, returning to church, or
                  searching for a spiritual home, you belong here.
                </p>
              </div>
            </Col>

            {/* TOP RIGHT */}
            <Col md={3}>
              <div className="hero-box image-box">
                <img
                  src={Leaders}
                  alt="Church worship"
                  className="hero-image"
                />
              </div>
            </Col>

            {/* BOTTOM LEFT */}
            <Col md={6}>
              <div className="hero-box image-box">
                <img
                  src={Hands}
                  alt="Hands raised in worship"
                  className="hero-image"
                />
              </div>
            </Col>

            {/* BOTTOM RIGHT */}
            <Col md={6}>
              <div className="hero-box text-box dark-box">
                <small className="text-warning text-uppercase fw-bold">
                  Our Message
                </small>

                <h2 className="display-5 fw-bold mt-3">End Time Message</h2>

                <p className="mt-4">
                  We believe God is calling His people to prepare, remain
                  faithful, and walk according to His Word.
                </p>

                <p>
                  Our desire is to proclaim truth, strengthen believers, and
                  point every generation toward Jesus Christ.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <AboutDoctrine />
    </>
  );
}