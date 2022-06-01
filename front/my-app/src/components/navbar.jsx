import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

class Roomsbar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Room1">Room 1 </Nav.Link>
              <Nav.Link href="/Room2">Room 2 </Nav.Link>
              <Nav.Link href="/Room3">Room 3</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Roomsbar;
