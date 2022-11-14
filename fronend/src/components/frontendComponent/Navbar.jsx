import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { GrTechnology } from "react-icons/gr";

function HomeNavbar() {
  return (
    <div className="nav-container">
      <Navbar collapseOnSelect expand="lg" className="nav-container">
        <Container className="container-fluid">
          <Navbar.Brand as={Link} to={"/"}>
            <GrTechnology className="icon" />
            DevTech Solutions
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="align-left">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/services"}>
                Services
              </Nav.Link>
              <Nav.Link as={Link} to={"/contact"}>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HomeNavbar;
