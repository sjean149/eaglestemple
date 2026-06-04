import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navs() {
  return (
    <Navbar
      expand="lg"
      bg="darkblue"
      data-bs-theme="dark"
      style={{
        backgroundColor: "darkblue",
        paddingTop: "18px",
        paddingBottom: "18px",
      }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "white",

          }}
        >
          Eagles Temple
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              style={{
                color: "white",
                fontSize: "1.2rem",
                marginRight: "15px",
              }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="#about"
              style={{
                color: "white",
                fontSize: "1.2rem",
                marginRight: "15px",
              }}
            >
              About
            </Nav.Link>

            <NavDropdown
              title="Ministries"
              id="basic-nav-dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#services">
                Services
              </NavDropdown.Item>

              <NavDropdown.Item href="#sermons">
                Sermons
              </NavDropdown.Item>

              <NavDropdown.Item href="#giving">
                Giving
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="#contact">
                Contact
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;