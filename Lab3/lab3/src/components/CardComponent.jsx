import { Card, Button, Container, Badge } from "react-bootstrap";
import menu1 from "../assets/images/menu1.jpg";
import menu2 from "../assets/images/menu2.jpg";
import menu3 from "../assets/images/menu3.jpg";
import menu4 from "../assets/images/menu4.jpg";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function CardComponent() {
  return (
    <div style={{ backgroundColor: '#1a1a1a' }} className="p-5">
      <Container>
        <h1 className="text-light text-left p-3">Our Menu</h1>
        <div className="d-flex flex-wrap justify-content-center">
          <Card style={{ width: "18rem" }} className="mx-3 mb-4 position-relative">
            <Badge bg="warning" className="position-absolute top-0 start-0 m-2 custom-badge">SALE</Badge>
            <Card.Img variant="top" src={menu1} />
            <Card.Body>
              <Card.Title>Margenrita Pizza</Card.Title>
              <Card.Text>
                <s className="text-muted me-2">$40.00</s>
                <strong className="text-warning">$24.00</strong>
              </Card.Text>
              <Button variant="dark" className="w-100 text-center">Buy</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className="mx-3 mb-4">
            <Card.Img variant="top" src={menu2} />
            <Card.Body>
              <Card.Title>Mushroom Pizza</Card.Title>
              <Card.Text>
                <strong>$25.00</strong>
              </Card.Text>
              <Button variant="dark" className="w-100 text-center">Buy</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className="mx-3 mb-4 position-relative">
            <Badge bg="warning" className="position-absolute top-0 start-0 m-2 custom-badge">NEW</Badge>
            <Card.Img variant="top" src={menu3} />
            <Card.Body>
              <Card.Title>Hawaiian Pizza</Card.Title>
              <Card.Text>
                <strong>$30.00</strong>
              </Card.Text>
              <Button variant="dark" className="w-100 text-center">Buy</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className="mx-3 mb-4 position-relative">
            <Badge bg="warning" className="position-absolute top-0 start-0 m-2 custom-badge">SALE</Badge>
            <Card.Img variant="top" src={menu4} />
            <Card.Body>
              <Card.Title>Pesto Pizza</Card.Title>
              <Card.Text>
                <s className="text-muted me-2">$50.00</s>
                <strong className="text-warning">$16.00</strong>
              </Card.Text>
              <Button variant="dark" className="w-100 text-center">Buy</Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default CardComponent;
