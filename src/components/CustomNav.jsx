// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";

import { Container, Navbar, Nav } from "react-bootstrap";

const CustomNav = ({ claim }) => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <strong>Pasta Restaurant</strong> - {claim}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Menu</Nav.Link>
          <Nav.Link href="#link">Prenotazioni</Nav.Link>
          <Nav.Link href="#link">Contatti</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default CustomNav;
