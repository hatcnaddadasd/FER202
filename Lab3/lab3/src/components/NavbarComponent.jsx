import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#1a1a1a' }} className="text-light">
      <Container>
        <Navbar.Brand href="#" className="text-light">Pizza House</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="#" active className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="text-light">About us</Nav.Link>
            <Nav.Link href="#" className="text-light">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex" role="search">
            <FormControl type="search" placeholder="Search" aria-label="Search" />
            <Button variant="outline-success" type="submit" className="mx-2">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
