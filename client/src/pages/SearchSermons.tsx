import { Container, Row, Col, Form, Dropdown} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import Preacher from "../assets/andrewpreach.jpg";
import Congregation from "../assets/congregationpreach.jpg";

import "./SearchSermons.css";
import SermonCardsList from "../components/SermonCardsList";

export default function Sermons() {

  return (
    <div className="sermon-page">
      <Container fluid className="hero-section px-0 position-relative">
        <Row className="hero-box ">
          <Col md={6} className="px-0">
            <img src={Preacher} alt="Preacher" className="img-fluid" />
          </Col>

          <Col md={6} className="px-0">
            <img src={Congregation} alt="Congregation" className="img-fluid " />
          </Col>
        </Row>
      </Container>
      <h1 className="all-sermons text-center">All Sermons</h1>

      <Container className="search-sermons py-5">
        <div className="search-box">
          <h2>Find a Sermon</h2>

          <p className="search-description">
            Search sermons by series, message title, or speaker. Watch or listen
            to your favorite message anytime.
          </p>

          <Form>
            <Form.Control
              className="search-input mb-4"
              type="search"
              placeholder="Search sermons..."
            />

            <Row className="g-3">
              <Col md={4}>
                <Dropdown className="w-100">
                  <Dropdown.Toggle
                    variant="light"
                    className="w-100 filter-btn text-start"
                  >
                    All Series
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="w-100">
                    <Dropdown.Item>Faith</Dropdown.Item>
                    <Dropdown.Item>Love</Dropdown.Item>
                    <Dropdown.Item>Salvation</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>

              <Col md={4}>
                <Dropdown className="w-100">
                  <Dropdown.Toggle
                    variant="light"
                    className="w-100 filter-btn text-start"
                  >
                    Speaker
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="w-100">
                    <Dropdown.Item href="#/action-1">
                      Pastor Bernard
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Dr. Benz</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Fr. Senora</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>

              <Col md={4}>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    className="w-100 text-start"
                    id="dropdown-basic"
                  >
                    Date
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>

      <Container>
        <Row>
          <SermonCardsList />
        </Row>
      </Container>
      

      
    </div>
  );
}
