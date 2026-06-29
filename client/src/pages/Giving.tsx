import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import NavBar from "../components/NavBar";
import EagleTemple4 from "../components/images/eaglestemple4.png";
import "./Giving.css";

export default function Giving() {
  return (
    <>
      <NavBar />

      {/* HERO */}
      <section className="giving-hero position-relative text-white">
        <img
          src={EagleTemple4}
          alt="Church congregation"
          className="hero-image"
        />

        <div className="hero-overlay">
          <Container>
            <div className="hero-text">
              <h5>Support the Mission</h5>

              <h1>Thank You for Your Generosity</h1>

              <p>
                Your giving helps Eagles Temple continue serving our community,
                supporting ministry, and spreading the Gospel.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* GIVE FORM */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="p-4 shadow-sm">
              <h2 className="mb-4 text-center">Give Securely Online</h2>

              <Form>
                {/* Amount */}
                <Form.Group className="mb-4">
                  <Form.Label>Choose Amount</Form.Label>

                  <div className="d-flex flex-wrap gap-2">
                    <Button variant="outline-dark">$25</Button>
                    <Button variant="outline-dark">$50</Button>
                    <Button variant="outline-dark">$100</Button>
                    <Button variant="outline-dark">$250</Button>
                  </div>

                  <Form.Control
                    className="mt-3"
                    type="number"
                    placeholder="Enter custom amount"
                  />
                </Form.Group>

                {/* Frequency */}
                <Form.Group className="mb-4">
                  <Form.Label>Giving Frequency</Form.Label>

                  <div className="d-flex gap-4">
                    <Form.Check
                      type="radio"
                      label="One Time"
                      name="frequency"
                      defaultChecked
                    />

                    <Form.Check
                      type="radio"
                      label="Recurring"
                      name="frequency"
                    />
                  </div>
                </Form.Group>

                {/* Payment */}
                <Form.Group className="mb-4">
                  <Form.Label>How would you like to give?</Form.Label>

                  <Form.Select>
                    <option>Select payment method</option>

                    <option>Credit / Debit Card</option>

                    <option>Apple Pay</option>

                    <option>Google Pay</option>

                    <option>Bank Transfer</option>
                  </Form.Select>
                </Form.Group>

                {/* Designation */}
                <Form.Group className="mb-4">
                  <Form.Label>Designate Your Gift</Form.Label>

                  <Form.Select>
                    <option>General Fund</option>

                    <option>Tithes</option>

                    <option>Building Fund</option>

                    <option>Missions</option>

                    <option>Youth Ministry</option>
                  </Form.Select>
                </Form.Group>

                <Button size="lg" className="w-100">
                  Continue Giving
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* WHY WE GIVE */}
      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col md={4}>
              <h3>Serve</h3>

              <p>
                Your generosity helps us serve families, outreach efforts, and
                our local community.
              </p>
            </Col>

            <Col md={4}>
              <h3>Support Ministry</h3>

              <p>
                Every contribution strengthens worship, discipleship, and church
                programs.
              </p>
            </Col>

            <Col md={4}>
              <h3>Build the Future</h3>

              <p>
                Together we invest in future generations through children and
                youth ministries.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* OTHER WAYS */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-4">Other Ways to Give</h2>

          <Row>
            <Col md={6}>
              <Card className="p-4 h-100">
                <h4>Give In Person</h4>

                <p>
                  Join us during service and place your offering in the giving
                  box.
                </p>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="p-4 h-100">
                <h4>Text to Give</h4>

                <p>Text GIVE to (000) 000-0000 and follow the instructions.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SCRIPTURE */}
      <section className="giving-scripture text-center py-5">
        <Container>
          <blockquote>
            “Each one must give as he has decided in his heart, not reluctantly
            or under compulsion, for God loves a cheerful giver.”
          </blockquote>

          <p>— 2 Corinthians 9:7</p>
        </Container>
      </section>
    </>
  );
}
